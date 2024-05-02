import { useState } from 'react';
import axios from "axios";
import Calendar from './calendar.jsx';
import {addHours, format} from "date-fns";

const BookingForm = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData ? userData.id : null;
    const [dateTime, setDateTime] = useState(null); // Nouvel état pour stocker la date sélectionnée
    const DEFAULT_TABLE_ID = "662cea989ddb06e43ed476ac";


    const handleSubmit = (e) => {
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
            startTime: date,
            endTime: endTime,
            tableId: DEFAULT_TABLE_ID // Inclure l'ID de la table par défaut

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
                        <Calendar onDateTimeChange={setDateTime} /> {/* Passer la fonction de mise à jour de l'état */}
                        {dateTime && (
                            <div>
                                Date sélectionnée : {format(dateTime, "dd/MM/yyyy")}<br />
                                Heure sélectionnée : {format(dateTime, "kk:mm")}
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
