const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    experience: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    itinerary: {
        type: Schema.Types.ObjectId,
        ref: "Itinerary"
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    // tells mongoose to add and maintain `createdAt` and `updatedAt` fields with
    // datetime timestamps
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);
