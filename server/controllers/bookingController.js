const Booking = require('../models/Booking');
const User = require('../models/User');

exports.createBooking = async (req, res) => {
    try {
        const {userId, date, startTime, endTime, people, status, table} = req.body;

        const booking = new Booking({
            user: userId,
            date: new Date(date),
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            people: people,
            status: status, 
            table: table
            

        });

        await booking.save();
        res.status(201).json({ message: 'Réservation créée avec succès', booking });    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la création de la réservation' });
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

exports.getBookingByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(userId)

        if (!userId) {
            return res.status(400).json({ error: 'Aucun ID d\'utilisateur fourni' });
        }

        const bookings = await Booking.find({ user: userId })
            .populate('user', 'email')
            .exec();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateBookingStatus = async (req, res) => {
    try {
        const bookingId = req.params.id; // Supposons que l'ID de la réservation est passé dans l'URL
        const newStatus = req.body.status; // Le nouveau statut est passé dans le corps de la requête

        // Trouver la réservation par son ID
        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ error: 'Réservation non trouvée' });
        }

        // Mettre à jour le statut de la réservation
        booking.status = newStatus;

        // Enregistrer les modifications
        const updatedBooking = await booking.save();

        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateBookingPeople = async (req, res) => {
     try {
        const bookingId = req.params.id;
        const newPeople = req.body.people;
        
        const booking = await Booking.findById(bookingId);

        if(!booking){
            return res.status(404).json({ error : 'Réservation non trouvé'});
        }

        booking.people = newPeople;
        const updatedBooking = await booking.save();
        res.status(200).json(updatedBooking);
        
     } catch (error) {
        res.status(500).json({ error: error.message });
     }
}
