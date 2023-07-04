const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateGroupInput is a combination Express middleware that uses the `check`
// middleware to validate the keys in the body of a request to login a user
const validateGroupInput = [
  check('members')
    .exists({ checkFalsy: true })
    .withMessage('Number of members is invalid'),
  check('budget')
    .exists({ checkFalsy: true })
    .withMessage('Budget is invalid'),
  handleValidationErrors
];

module.exports = validateGroupInput;
