const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    }
  }, {
    timestamps: true
});

module.exports = mongoose.model('Group', groupSchema);
