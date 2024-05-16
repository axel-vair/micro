const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/newBooking', bookingController.createBooking);
router.get('/allBookings', bookingController.getAllBookings);
router.get('/:id/myBookings', bookingController.getBookingByUserId);
router.patch('/:id/status', bookingController.updateBookingStatus);
router.patch('/:id/people',bookingController.updateBookingPeople);
module.exports = router;

