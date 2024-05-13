import { Link } from 'react-router-dom';

const Navigation = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = !!user;

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
                                <Link to="/logout" className="hover:text-white">
                                    Déconnexion
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
