const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Group = mongoose.model('Group');
const router = express.Router();
const { requireUser } = require('../../config/passport');
const validateGroupInput = require('../../validations/group');


router.get('/:groupId/users/:userId', async(req, res, next) => {
    //group show route for a user
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch(err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = {message: "No user found with that id"};
        return next(error);
    }
    try {
        const group = await Group.findById(req.params.groupId)
                                .populate("name members budget");
        return res.json(group);
    } catch(err) {
        const error = new Error('Group not found');
        error.statusCode = 404;
        error.errors = {message: "No Group found with that id"};
        return next(error);
    }
});

router.patch('/:groupId/users/:userId', validateGroupInput, async(req, res, next) => {
    //group update route for a user
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch(err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = {message: "No user found with that id"};
        return next(error);
    }
    try {
        const group = await Group.findByIdAndUpdate(req.params.groupId, req.body);
        return res.json(group);
    } catch(err) {
        const error = new Error('Group not found');
        error.statusCode = 404;
        error.errors = {message: "No group found with that id"};
        return next(error);
    }
});

const deleteGroup = (group) => {
    return (
        {message: "group is deleted"}
    )
}

router.delete('/:groupId', async(req, res, next) => {
    //group destroy route for a user
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch(err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = {message: "No user found with that id"};
        return next(error);
    }
    try {
        const group = await Group.findByIdAndDelete(req.params.groupId);
        return res.json(deleteGroup(group));
    } catch(err) {
        const error = new Error('Group not found');
        error.statusCode = 404;
        error.errors = {message: "No group found with that id"};
        return next(error);
    }
});

router.get('/users/:userId', async(req, res, next) => {
    //group index route for a user
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch(err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = {message: "No user found with that id"};
        return next(error);
    }
    try {
        const user_groups = await Group.find({owner: user._id})
                                       .sort({createdAt: -1 })
                                       .populate("name members budget");
        return res.json(user_groups)
    } catch(err) {
        const error = new Error('Groups not found');
        error.statusCode = 404;
        error.errors = {message: "No groups made"};
        return next(error);
    }
});

router.post('/users/:userId', validateGroupInput, async(req, res, next) => {

    try {
        const newGroup = new Group({
            name: req.body.name,
            members: req.body.members,
            budget: req.body.budget,
            owner: req.body.owner
          });
        let group = await newGroup.save();
        group = await group.populate("_id name members budget", "owner");
        return res.json(group);
     } catch(err) {
        next(err);
     }
});


router.get('/', async (req, res) => {
    try {
      const groups = await Group.find()
                                .populate("name members budget")
                                .sort({ createdAt: -1 });
      return res.json(groups);
    }
    catch(err) {
      return res.json([]);
    }
  });

module.exports = router;
