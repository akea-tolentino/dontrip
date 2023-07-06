const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Trip = mongoose.model('Trip');
const router = express.Router();
const { requireUser } = require('../../config/passport');
const validateTripInput = require('../../validations/trip');


//ALL GETS AND DELETE ROUTES RETURN A 400 ERROR AND SAY CANNOT READ PROPERTIES OF NULL (READING '1')

router.get('/:tripId/users/:userId', async(req, res, next) => {
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
        const trip = await Trip.findById(req.params.tripId)
                         .populate("month location experience");
        return res.json(trip);
    } catch(err) {
        const error = new Error('Trip not found');
        error.statusCode = 404;
        error.errors = {message: "No trip found with that id"};
        return next(error);
    }
});


router.patch('/:tripId/users/:userId', validateTripInput, async(req, res, next) => { // should also use requireUser
    // let user;
    // try {
    //     user = await User.findById(req.params.userId);
    // } catch(err) {
    //     const error = new Error('User not found');
    //     error.statusCode = 404;
    //     error.errors = {message: "No user found with that id"};
    //     return next(error);
    // }
    try {
        const trip = await Trip.findByIdAndUpdate(req.params.tripId, req.body);
        //more logic needed for updating the trip object
        return res.json(trip);
    } catch(err) {
        const error = new Error('Trip not found');
        error.statusCode = 404;
        error.errors = {message: "No trip found with that id"};
        return next(error);
    }
});

const deleteTrip = (trip) => {
    return (
        {message: "trip is deleted"}
    )
}

router.delete('/:tripId/users/:userId', async(req, res, next) => { // should also use requireUser
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
        const trip = await Trip.findById(req.params.tripId);
        return res.json(deleteTrip(trip));
    } catch(err) {
        const error = new Error('Trip not found');
        error.statusCode = 404;
        error.errors = {message: "No trip found with that id"};
        return next(error);
    }
});


router.get('/users/:userId', async(req, res, next) => {
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
        const user_trips = await Trip.find({owner: user._id})
                                .sort({createdAt: -1 })
                                .populate("month location experience");
        return res.json(user_trips)
    } catch(err) {
        const error = new Error('Trips not found');
        error.statusCode = 404;
        error.errors = {message: "No trips planned"};
        return next(error);
    }
});

router.post('/users/:userId', validateTripInput, async(req, res, next) => { //somehow needs to require user
     try {
        const newTrip = new Trip({
            experience: req.body.experience,
            month: req.body.month,
            location: req.body.location,
            itinerary: req.body.itinerary, // these are not working
            owner: req.body.owner
            // group: req.body.group // these are not working
        });
        let trip = await newTrip.save();
        trip = await trip.populate("owner month location experience itinerary");
        return res.json(trip);
     } catch(err) {
        next(err);
     }
});

module.exports = router;
