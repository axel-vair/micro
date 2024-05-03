const express = require('express');
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/booking');
const userRoutes = require('./routes/user');

const app = express();

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/micro', {
    serverSelectionTimeoutMS: 30000 // 30 secondes
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self';");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

// Démarrage du serveur
app.listen(3001, () => {
    console.log('Serveur démarré sur le port 3001');
});