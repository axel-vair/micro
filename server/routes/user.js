const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login')
router.post('/register')
router.post('/logout')

module.exports = router;
