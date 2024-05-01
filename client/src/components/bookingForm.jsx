import {useState} from 'react';
import axios from "axios";

const BookingForm = () => {
    const userId = localStorage.getItem('userId');

    const [formDataBooking, setFormDataBooking] = useState({

        userId: localStorage.getItem('userId'),
        date: '',
        startTime: '',
        endTime: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormDataBooking(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convertir la date en objet Date JavaScript au format ISO (YYYY-MM-DD)
        const date = new Date(formDataBooking.date);

        // Extraire les heures et minutes des heures de début et de fin
        const [startHour, startMinute] = formDataBooking.startTime.split(':');
        const [endHour, endMinute] = formDataBooking.endTime.split(':');

        // Créer les objets Date pour l'heure de début et l'heure de fin
        const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, startMinute);
        const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), endHour, endMinute);

        // Création du nouvel objet à envoyer
        const bookingData = {
            userId: formDataBooking.userId,
            date: date.toISOString(), // Convertir en format ISO (YYYY-MM-DDTHH:MM:SSZ)
            startTime: startTime,
            endTime: endTime
        };

        axios.post('http://localhost:3001/api/bookings/newBooking', bookingData)
            .then(response => {
                console.log(response.data);


            })
            .catch(error => {
                console.error('Erreur', error)
            });
    };

    return (

        <div>
            {userId ? (
                <>
                    <h2>Réserver une table</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>UserID:</label>
                            <input type="text" name="userId" value={formDataBooking.userId} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Date:</label>
                            <input type="date" name="date" value={formDataBooking.date} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Heure de début:</label>
                            <input type="time" name="startTime" value={formDataBooking.startTime}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Heure de fin:</label>
                            <input type="time" name="endTime" value={formDataBooking.endTime} onChange={handleChange}/>
                        </div>
                        <button type="submit">Réserver</button>
                    </form>
                </>
            ) : (
                <p>Vous devez être connecté pour réserver une table.</p>
            )}
        < /div>
    );
};

export default BookingForm;
