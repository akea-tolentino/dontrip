const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    events: {
        description: {
            type: Text,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        }
    },
    stays: {
        description: {
            type: Text,
            required: true
        },
        check_in_date: {
            type: Date,
            required: true
        },
        check_out_date: {
            type: Date,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        }
    }
}, {
    // tells mongoose to add and maintain `createdAt` and `updatedAt` fields with
    // datetime timestamps
    timestamps: true
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
