const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    events: [
    {
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            optional: true
        },
        address: {
            type: String,
            optional: true
        },
        cost: {
            type: Number
        }
    }
],
    stays: [
    {
        description: {
            type: String,
            required: true
        },
        check_in_date: {
            type: String,
            required: true
        },
        check_out_date: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        cost: {
            type: Number
        }
    }
]
}, {
    // tells mongoose to add and maintain `createdAt` and `updatedAt` fields with
    // datetime timestamps
    timestamps: true
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
