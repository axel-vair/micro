const Booking = require('../models/Booking');
const User = require('../models/User');

exports.createBooking = async (req, res) => {
    try {
        const {userId, date, startTime, endTime, people} = req.body;

        const booking = new Booking({
            user: userId,
            date: new Date(date),
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            people: people

        });

        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({})
            .populate('user', 'email')
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}