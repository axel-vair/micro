const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/newBooking', bookingController.createBooking)
router.get('/allBookings', bookingController.getAllBookings);

module.exports = router;
