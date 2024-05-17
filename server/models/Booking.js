const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    people: { type: Number, required: true },
    status: { type: Boolean, required: true },
    table: { type: Number, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;


/*
const deleteAllBookings = async () => {
    try {
      const result = await Booking.deleteMany({});
      console.log('Tous les bookings ont été supprimés:', result);
    } catch (err) {
      console.error('Erreur lors de la suppression des bookings:', err);
    }
  };
  
  deleteAllBookings();
  FAIRE UNE AUTRE TABLE POUR LES BOOKING PASSED + IMPLEMENTATION BTN DELETE ALL 
  */