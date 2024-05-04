import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/login">Connexion</Link></li>
                <li><Link to="/register">Inscription</Link></li>
                <li><Link to="/bookings">Réservations</Link></li>
                <li><Link to="/book">Formulaire de réservation</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;