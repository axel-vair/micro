const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Créer un nouvel utilisateur
router.post('/register', userController.register);
router.post('/login', userController.login );

module.exports = router;

