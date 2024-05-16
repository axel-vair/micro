import { useState } from 'react';
import axios from "axios";
import Calendar from './calendar.jsx';
import { addHours, format, isBefore } from "date-fns";
import Navigation from "./_navbar.jsx";
import Modal from './_modal.jsx';

const BookingForm = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData ? userData.id : null;
    const [dateTime, setDateTime] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const now = new Date();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const [table, setTable] = useState(1);

    const handleDateTimeChange = (newDateTime) => {
        if (isBefore(newDateTime, now)) {
            // Griser l'heure sélectionnée si elle est dépassée
            const disabledHours = document.querySelectorAll('.time');
            disabledHours.forEach((hour) => {
                hour.classList.add('');
            });
        } else {
            // Réactiver les heures sélectionnées
            const disabledHours = document.querySelectorAll('.react-calendar__tile--disabled');
            disabledHours.forEach((hour) => {
                hour.classList.remove('react-calendar__tile--disabled');
            });
            setDateTime(newDateTime);
        }
    };

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
            people: numberOfPeople,
            status: status,
            table: table
            

        };

        try {
            const response = await axios.post('http://localhost:3001/api/bookings/newBooking', bookingData);
            console.log(response.data);
            setIsModalOpen(true); // Ouvrir la modal après une réservation réussie
        } catch (error) {
            console.error('Erreur', error);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <Navigation />
            <div className="container mx-auto px-4 py-8">
                {userId ? (
                    <>
                        <h2 className="text-2xl text-white font-bold mb-4">Réserver une table</h2>
                        <form onSubmit={handleSubmit}>
                            <Calendar onDateTimeChange={handleDateTimeChange} />
                            {dateTime && (
                                <div className="mt-4 bg-white p-4 rounded-md mx-auto max-w-md">
                                    <p className="text-gray-800">Date sélectionnée : {format(dateTime, "dd/MM/yyyy")}</p>
                                    <p className="text-gray-800">Heure sélectionnée : <span className="font-bold">{format(dateTime, "HH:mm")}</span></p>

                                    <label className="block text-gray-800 mt-4">
                                        Nombre de personnes:
                                        <input
                                            type="number"
                                            value={numberOfPeople}
                                            onChange={(e) => setNumberOfPeople(e.target.value)}
                                            min="1"
                                            max="10"
                                            className="ml-2 border border-gray-300 rounded-md py-1 px-2"
                                        />  
                                    </label>

                                    <label className="block text-gray-800 mt-4">
                                        N° de table
                                        <input type="number"
                                         value={table}
                                         onChange={(e)=>setTable(e.target.value)}
                                         min="1"
                                         max="10"
                                         className="ml-2 border border-gray-300 rounded-md py-1 px-2"

                                        />
                                    </label>
                                </div>
                            )}

                            <div className="flex justify-center mt-4">
                                {dateTime && (
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                                    >
                                        Réserver
                                    </button>
                                )}
                            </div>
                        </form>
                    </>
                ) : (
                    <p>Vous devez être connecté pour réserver une table.</p>
                )}
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default BookingForm;
