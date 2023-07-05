const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();
const passport = require('passport');
const { loginUser, restoreUser, logoutUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

/* GET users listing. */

router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    // In development, allow React server to gain access to the CSRF token
    // whenever the current user information is first loaded into the
    // React application
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  res.json({
    _id: req.user._id,
    email: req.user.email
  });
});

router.post('/register', validateRegisterInput, async (req, res, next) => {
  const user = await User.findOne({
    $or: [{email: req.body.email}]
  });

  if (user) {
    const err = new Error("validation error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user already exists with this email"
    }
    err.errors = errors;
    return next(err);
  }

  const newUser = new User({
    email: req.body.email
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch(err) {
        next(err);
      }
    })
  });
});

router.post('/login', validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function(err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(user));
  })(req, res, next);
});

router.delete('/logout', async (req, res, next) => {
  passport.authenticate('local', async function(user) {
    return res.json(await logoutUser(user));
  })(req, res, next);
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
                              .populate("email")
                              .sort({ createdAt: -1 });
    return res.json(users);
  }
  catch(err) {
    return res.json([]);
  }
});


module.exports = router;
