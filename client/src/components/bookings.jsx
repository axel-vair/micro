import { useEffect, useState } from 'react'
import axios from 'axios';
import Navigation from "./_navbar.jsx";

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/bookings/allBookings');
                setBookings(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navigation />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Liste des réservations</h2>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-500 text-white p-4 rounded-md">
                        Erreur : {error}
                    </div>
                ) : (
                    <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
                        <thead>
                        <tr className="bg-gray-700 text-left">
                            <th className="px-4 py-2">Utilisateur</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Heure de début</th>
                            <th className="px-4 py-2">Heure de fin</th>
                            <th className="px-4 py-2">Statut</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id} className="border-b border-gray-700">
                                <td className="px-4 py-2">{booking.user?.email || 'Utilisateur inconnu'}</td>
                                <td className="px-4 py-2">{new Date(booking.date).toLocaleDateString()}</td>
                                <td className="px-4 py-2">{new Date(booking.startTime).toLocaleTimeString()}</td>
                                <td className="px-4 py-2">{new Date(booking.endTime).toLocaleTimeString()}</td>
                                <td className="px-4 py-2">{booking.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BookingList