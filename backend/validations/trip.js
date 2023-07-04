const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateExperienceInput is a combination Express middleware that uses the `check`
// middleware to validate the keys in the body of a request to login a user
const validateTripInput = [
  check('experience')
    .exists({ checkFalsy: true })
    .withMessage('Experience is invalid'),
  check('month')
    .exists({ checkFalsy: true })
    .withMessage('Month is invalid'),
  check('location')
    .exists({ checkFalsy: true })
    .withMessage('Location is invalid'),
  handleValidationErrors
];

module.exports = validateTripInput;
