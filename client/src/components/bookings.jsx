import {useEffect, useState} from 'react'
import axios from 'axios';

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
            } catch (err)    {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Booking List</h2>
            <table>
                <thead>
                <tr>
                    <th>User</th>
                    <th>Table</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking) => (
                    <tr key={booking._id}>
                        <td>{booking.user.email}</td>
                        <td>{booking.table.name}</td>
                        <td>{new Date(booking.date).toLocaleDateString()}</td>
                        <td>{new Date(booking.startTime).toLocaleTimeString()}</td>
                        <td>{new Date(booking.endTime).toLocaleTimeString()}</td>
                        <td>{booking.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;