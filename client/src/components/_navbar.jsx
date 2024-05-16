import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons';

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
        <nav className="bg-gray-800 py-7 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/">
                    <FontAwesomeIcon icon={faHome} className="text-white h-6 w-6 mr-2" size="10x" />
                    </Link>
                </div>
                <ul className="flex space-x-6 text-gray-400 transition-colors duration-300">
                    {!isLoggedIn && (
                        <>
                            <li>
                            <Link to="/login" className="hover:text-white">
                            <button onClick={() => history.push("/login")} className="text-white font-inika bg-gray-800 border rounded border-white border-2 py-2 px-4 hover:text-amber-600 hover:border-amber-600">
                                Connexion
                            </button>
                            </Link>
                            </li>
                            <li>
                            <Link to="/register" className="hover:text-white">
                            <button onClick={() => history.push("/register")} className="text-white bg-gray-800 border rounded border-white border-2 py-2 px-4 hover:text-amber-600 hover:border-amber-600">
                                Inscription
                            </button>
                            </Link>
                            </li>
                            <li>
                                <Link to="/plan" className='hover:text-white'>
                                    Nos Tables 
                                </Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            {user.role === "admin" && (
                                <li>
                                    <Link to="/bookings" className="hover:text-white">
                                        Toutes les réservations
                                    </Link>
                                </li>
                            )}

                            <li>
                                <Link to="/tables" className='hover:text-white'>
                                    Nos Tables 
                                </Link>
                            </li>

                            <li>
                                <Link to="/book" className="hover:text-white">
                                    Réserver
                                </Link>
                            </li>
                            <li>
                                <Link to="/reservations" className="hover:text-white">
                                    Mes réservations
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