import { useState } from 'react';
import axios from "axios";
import Calendar from './calendar.jsx';
import { addHours, format } from "date-fns";

const BookingForm = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData ? userData.id : null;
    const [dateTime, setDateTime] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!dateTime) {
            console.error("Veuillez sélectionner une date et une heure.");
            return;
        }

        // Convertir la date en objet Date JavaScript au format ISO (YYYY-MM-DD)
        const date = new Date(dateTime);
        const endTime = addHours(date, 1);

        // Création du nouvel objet à envoyer
        const bookingData = {
            userId: userId,
            date: date.toISOString(), // Convertir en format ISO (YYYY-MM-DDTHH:MM:SSZ)
            startTime: date.toISOString(),
            endTime: endTime.toISOString(),
            people: numberOfPeople
        };

        try {
            const response = await axios.post('http://localhost:3001/api/bookings/newBooking', bookingData);
            console.log(response.data);
        } catch (error) {
            console.error('Erreur', error);
        }
    };

    return (
        <div>
            {userId ? (
                <>
                    <h2>Réserver une table</h2>
                    <form onSubmit={handleSubmit}>
                        <Calendar onDateTimeChange={setDateTime} />
                        {dateTime && (
                            <div>
                                Date sélectionnée : {format(dateTime, "dd/MM/yyyy")}<br/>
                                Heure sélectionnée : {format(dateTime, "kk:mm")}<br/>

                                <label>Nombre de personnes:
                                    <input
                                        type="number"
                                        value={numberOfPeople}
                                        onChange={(e) => setNumberOfPeople(e.target.value)}
                                        min="1"
                                        max="10"/>
                                </label>
                            </div>
                        )}

                        <button type="submit">Réserver</button>
                    </form>
                </>
            ) : (
                <p>Vous devez être connecté pour réserver une table.</p>
            )}
        </div>
    );
};

export default BookingForm;