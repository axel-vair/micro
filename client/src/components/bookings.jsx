import { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from "./_navbar.jsx";

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const openModal = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    const handleRowClick = ($id) => {
        console.log(`chaque id est : ${$id}`);
    };

    const handleCancelBooking = async (bookingId) => {
        try {
            await axios.patch(`http://localhost:3001/api/bookings/${bookingId}/status`, { status: false });
            setBookings(bookings.map(booking => booking._id === bookingId ? { ...booking, status: false } : booking));
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdateBooking = async () => {
        try {
            await axios.patch(`http://localhost:3001/api/bookings/${selectedBooking._id}/people`, { people: selectedBooking.people });
            setBookings(bookings.map(booking => booking._id === selectedBooking._id ? selectedBooking : booking));
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };

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
                                <th className="px-4 py-2">Client</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Heure de début</th>
                                <th className="px-4 py-2">Heure de fin</th>
                                <th className="px-4 py-2">Statut</th>
                                <th className='px-4 py-2'>Personnes</th>
                                <th className="px-4 py-2">Annulation</th>
                                <th className='px-4 py-2'>Modification</th>
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
                                        {new Date(booking.date).toLocaleDateString('fr-FR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </td>
                                    <td className="px-4 py-2">
                                        {new Date(booking.startTime).toLocaleTimeString('fr-FR', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: false
                                        })}
                                    </td>
                                    <td className="px-4 py-2">
                                        {new Date(booking.endTime).toLocaleTimeString()}
                                    </td>
                                    <td className="px-4 py-2">
                                        {booking.status === true ? 'Confirmé' : 'Annuler'}
                                    </td>
                                    <td className='px-4 py-2'>
                                        {booking.people}
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={() => handleCancelBooking(booking._id)}>
                                            Annuler
                                        </button>
                                    </td>
                                    <td className='px-4 py-2'>
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                                            onClick={() => openModal(booking)}>
                                            Modifier la réservation
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
                            <h2 className="text-2xl text-gray-700 font-bold mb-4">Modifier la réservation</h2>
                            <label htmlFor="people" className="block mb-2 text-gray-700">
                                Nombre de personnes :
                            </label>
                            <input
                                type="number"
                                id="people"
                                className="border border-gray-300  text-gray-800 rounded-lg px-4 py-2 mb-4 w-full"
                                value={selectedBooking?.people || ''}
                                onChange={(e) => setSelectedBooking({ ...selectedBooking, people: e.target.value })}
                            />
                            <div className="flex justify-end">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 transition duration-200"
                                    onClick={() => setShowModal(false)}
                                >
                                    Annuler
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                                    onClick={handleUpdateBooking}
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingList;
