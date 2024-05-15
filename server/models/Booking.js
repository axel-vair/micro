const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    people: {type: Number, require: true},
    status: {type: Boolean, require: true}
});

module.exports = mongoose.model('Booking', bookingSchema);