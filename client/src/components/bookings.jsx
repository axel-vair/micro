import { useEffect, useState } from 'react'
import axios from 'axios';
import Navigation from "./_navbar.jsx";

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleRowClick = ($id) =>{
        console.log(`chaque id est : ${$id}`);
    }

    const handleCancelBooking = async (bookingId) => {
        try {
          await axios.patch(`http://localhost:3001/api/bookings/${bookingId}/status`, { status: false });
          setBookings(bookings.map(booking => booking._id === bookingId ? { ...booking, status: false } : booking));
        } catch (err) {
          console.error(err);
        }
      }

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/bookings/allBookings');
                setBookings(response.data);
                setLoading(false);
                console.log(response.data);
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
                            <th className="px-4 py-2">Annulation</th>

                        </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                               <tr
                                key={booking._id}
                                className={`border-b border-gray-700 ${booking.status === true ? 'bg-green-500' : 'bg-red-500'}`}
                                >
                                <td className="px-4 py-2">
                                    {booking.user?.email || 'Utilisateur inconnu'}
                                </td>
                                <td className="px-4 py-2">
                                    {new Date(booking.date).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2">
                                    {new Date(booking.startTime).toLocaleTimeString()}
                                </td>
                                <td className="px-4 py-2">
                                    {new Date(booking.endTime).toLocaleTimeString()}
                                </td>
                                <td className="px-4 py-2">
                                    {booking.status === true ? 'Confirmé' : 'Annuler'}
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                    type="button"
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    onClick={() => handleCancelBooking(booking._id)}>
                                    Annuler
                                    </button>
                                </td>
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