import ReactCalendar from "react-calendar";
import { useState } from "react";
import { add, format } from "date-fns";
import { INTERVAL, RESTAURANT_CLOSING_TIME, RESTAURANT_OPENING_TIME } from "../constants/config.js";

const Calendar = ({ onDateTimeChange }) => {
    const [selectedDate, setSelectedDate] = useState(null); // État pour stocker la date sélectionnée
    const [selectedTime, setSelectedTime] = useState(null); // État pour stocker l'heure sélectionnée

    const handleDateTimeChange = (dateTime) => {
        // Mettre à jour l'état avec la nouvelle date et heure sélectionnées
        setSelectedTime(dateTime);
        onDateTimeChange(dateTime); // Appeler la fonction de rappel avec la nouvelle date et heure sélectionnées
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Réinitialiser l'heure sélectionnée lorsque la date est modifiée
    };

    const getTimesForSelectedDate = () => {
        if (!selectedDate) return [];

        const beginning = add(selectedDate, { hours: RESTAURANT_OPENING_TIME });
        const end = add(selectedDate, { hours: RESTAURANT_CLOSING_TIME });
        const interval = INTERVAL;
        const times = [];

        for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
            times.push(i);
        }

        return times;
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <ReactCalendar
                minDate={new Date()}
                className="calendar p-2"
                view="month"
                onClickDay={handleDateChange} // Mettre à jour la date sélectionnée
            />
            {selectedDate && (
                <div className="flex gap-4">
                    {/* Afficher les créneaux horaires disponibles pour la date sélectionnée */}
                    {getTimesForSelectedDate().map((time, i) => (
                        <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
                            <button
                                type="button"
                                onClick={() => handleDateTimeChange(time)}
                            >
                                {format(time, "kk:mm")}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Calendar;
