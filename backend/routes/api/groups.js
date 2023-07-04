const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Group = mongoose.model('Group');
const router = express.Router();
const { requireUser } = require('../../config/passport');
const validateGroupInput = require('../../validations/group');


router.get('/:groupId/users/:userId', async(req, res, next) => {
    //group show route for a user
});

router.patch('/:groupId/users/:userId', validateGroupInput, async(req, res, next) => {
    //group update route for a user
});

router.delete('/:groupId/users/:userId', async(req, res, next) => {
    //group destroy route for a user
});

router.get('/users/:userId', async(req, res, next) => {
    //group index route for a user
});

router.post('/users/:userId', validateGroupInput, async(req, res, next) => {
    //group index route for a user
});

module.exports = router;
