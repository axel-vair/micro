import { useState } from 'react';
import axios from "axios";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        tableId: '',
        date: '',
        startTime: '',
        endTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/bookings/newBooking', formData)
            .then(response => {
                console.log(response.data);
                setFormData({
                    userId: '',
                    tableId: '',
                    date: '',
                    startTime: '',
                    endTime: ''
                });
            })
            .catch(error => {
                console.error('Erreur', error)
            })
    };

    return (
        <div>
            <h2>Réserver une table</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserID:</label>
                    <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
                </div>
                <div>
                    <label>TableID:</label>
                    <input type="text" name="tableId" value={formData.tableId} onChange={handleChange} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div>
                    <label>Heure de début:</label>
                    <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                </div>
                <div>
                    <label>Heure de fin:</label>
                    <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
                </div>
                <button type="submit">Réserver</button>
            </form>
        </div>
    );
};

export default BookingForm;
