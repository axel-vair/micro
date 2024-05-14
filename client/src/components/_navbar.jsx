import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = !!user;
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3001/api/users/logout');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <Link to="/">Saveurs Modernes</Link>
                </div>
                <ul className="flex space-x-6 text-gray-400 transition-colors duration-300">
                    {!isLoggedIn && (
                        <>
                            <li>
                                <Link to="/login" className="hover:text-white">
                                    Connexion
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="hover:text-white">
                                    Inscription
                                </Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link to="/bookings" className="hover:text-white">
                                    Réservations
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className="hover:text-white">
                                    Formulaire de réservation
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="hover:text-white">
                                    Déconnexion
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;