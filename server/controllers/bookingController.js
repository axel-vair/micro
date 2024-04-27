const Booking = require('../models/Booking');
const Table = require('../models/Table');
const User = require('../models/User');

exports.createBooking = async (req, res) => {
    try {
        const { userId, tableId, date, startTime, endTime } = req.body;

        // Vérifier que la table est disponible pour la plage horaire demandée
        const table = await Table.findById(tableId);
        if (!table.available) {
            return res.status(400).json({ error: 'Table not available for the requested time' });
        }

        const booking = new Booking({
            user: userId,
            table: tableId,
            date,
            startTime,
            endTime
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user table');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}