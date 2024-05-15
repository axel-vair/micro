const User = require('../models/User');
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        });
        await user.save()
        res.status(200).json({message: "Inscription réussie"});
    } catch (error) {
        if (error.code === 11000) {
            // Erreur de duplication de clé (email déjà utilisé)
            return res.status(400).json({ message: 'Cette adresse email est déjà utilisée.' });
        }
        res.status(500).json({error: error.message});
    }
}

exports.login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Trouver l'utilisateur avec l'email fourni
        const userWithEmail = await User.findOne({email}).catch(
            (err) => {
                console.log("Error:", err);
                return res.status(500).json({message: "Une erreur s'est produite lors de la recherche de l'utilisateur"});
            }
        );

        // Si l'utilisateur n'existe pas
        if (!userWithEmail) {
            return res.status(400).json({message: "Email ou mot de passe incorrect"});
        }

        // Comparer le mot de passe fourni avec le mot de passe hashé
        const isPasswordValid = await bcrypt.compare(password, userWithEmail.password);

        // Si le mot de passe est incorrect
        if (!isPasswordValid) {
            return res.status(400).json({message: "Email ou mot de passe incorrect"});
        }
        return res.status(200).json({message: "Connexion réussie", user: userWithEmail});
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

exports.logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'Déconnexion réussie' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}