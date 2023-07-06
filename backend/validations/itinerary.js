const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateItineraryInput is a combination Express middleware that uses the `check`
// middleware to validate the keys in the body of a request to login a user

//THIS MAY OR MAY NOT BE WORKING PROPERLY
const validateItineraryInput = [
  check('events')
    .exists({ checkFalsy: true })
    .withMessage('Events is invalid'),
  check('stays')
    .exists({ checkFalsy: true })
    .withMessage('Stays is invalid'),
  check('events.**.description')
    .exists({ checkFalsy: true })
    .withMessage('Event description is invalid'),
  check('events.**.date')
    .exists({ checkFalsy: true })
    .withMessage('Event date is invalid'),
  check('events.**.address')
    .exists({ checkFalsy: true })
    .withMessage('Event address is invalid'),
  check('stays.**.description')
    .exists({ checkFalsy: true })
    .withMessage('Stay description is invalid'),
  check('stays.**.check_in_date')
    .exists({ checkFalsy: true })
    .withMessage('Stays check in date is invalid'),
  check('stays.**.check_out_date')
    .exists({ checkFalsy: true })
    .withMessage('Stays check out date is invalid'),
  check('stays.**.address')
    .exists({ checkFalsy: true })
    .withMessage('Stays address is invalid'),
  handleValidationErrors
];

module.exports = validateItineraryInput;
