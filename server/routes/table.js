const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// Créer un nouvel utilisateur
router.post('/create-table', tableController.createTable)
/*router.post('/book-table', tableController.bookTable);
router.get('/all-tables', tableController.getAllTables );*/

module.exports = router;

