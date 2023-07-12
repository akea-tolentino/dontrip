const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Itinerary = mongoose.model('Itinerary');
const router = express.Router();
const { requireUser } = require('../../config/passport');
const validateItineraryInput = require('../../validations/itinerary');




router.get('/:itineraryId', async(req, res, next) => {
    //show for users trip itineraries
    try {
        const user_itineraries = await Itinerary.findById(req.params.itineraryId)
                                                .populate("events.description events.date events.address stays.description stays.check_in_date stays.check_out_date stays.address");
            return res.json(user_itineraries)
    } catch(err) {
        const error = new Error('itinerary not found');
        error.statusCode = 404;
        error.errors = {message: "No itinerary made"};
        return next(error);
    }
});

router.post('/users/:userId', validateItineraryInput, async(req, res, next) => {
    try {
       const newItinerary = new Itinerary({
        events: req.body.events,
        stays: req.body.stays
        });
       let itinerary = await newItinerary.save();
       itinerary = await itinerary.populate("_id events.description events.date events.address stays.description stays.check_in_date stays.check_out_date stays.address");
       console.log(itinerary)
       return res.json(itinerary);
    } catch(err) {
       next(err);
    }
});

const deleteItinerary = (itinerary) => {
    return (
        {message: "itinerary is deleted"}
    )
}

router.delete('/:itineraryId', async(req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.itineraryId);
        return res.json(deleteItinerary(itinerary));
    } catch(err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = {message: "No itinerary found with that id"};
        return next(error);
    }
});

router.patch('/:itineraryId', async(req, res, next) => {
    try {
        const itinerary = await Itinerary.findByIdAndUpdate(req.params.itineraryId, req.body);
        return res.json(itinerary);
    } catch(err) {
        const error = new Error('Itinerary not found');
        error.statusCode = 404;
        error.errors = {message: "No itinerary found with that id"};
        return next(error);
    }
});

module.exports = router;
