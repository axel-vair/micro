import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navigation from "./_navbar.jsx";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/api/users/login", { email, password })
            .then((response) => {
                const userData = {
                    id: response.data.user._id,
                    email: response.data.user.email,
                    role: response.data.user.role,
                };

                localStorage.setItem("user", JSON.stringify(userData));
                setShowPopup(true);
                setTimeout(() => {
                    navigate('/book');
                }, 2000);
            })
            .catch(error => {
                console.error('Erreur lors de la requête:', error);
                // Gérer les erreurs en fonction de vos besoins
            });
    };

    return (
        <>
            <Navigation />

            <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Formulaire de connexion</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-700 border-gray-600 text-white rounded-md px-4 py-2 w-full"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block font-medium mb-1">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-700 border-gray-600 text-white rounded-md px-4 py-2 w-full"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                        >
                            Se connecter
                        </button>
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Connexion réussie !</h2>
                        <p className="mb-4">Vous allez être redirigé vers la page de réservation dans 2 secondes.</p>
                    </div>
                </div>
            )}
        </>
    );
}