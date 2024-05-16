const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/newBooking', bookingController.createBooking)
router.get('/allBookings', bookingController.getAllBookings);
router.patch('/:id/status', bookingController.updateBookingStatus);
router.patch('/:id/people',bookingController.updateBookingPeople);
module.exports = router;

