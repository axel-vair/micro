import ReactCalendar from "react-calendar";
import { useState } from "react";
import { add, format, isBefore } from "date-fns";
import { INTERVAL, RESTAURANT_CLOSING_TIME, RESTAURANT_OPENING_TIME } from "../constants/config.js";

const Calendar = ({ onDateTimeChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const now = new Date();

    const handleDateTimeChange = (dateTime) => {
        if (isBefore(dateTime, now)) {
            // Griser l'heure sélectionnée si elle est dépassée
            setSelectedTime(dateTime);
            onDateTimeChange(dateTime);
        } else {
            // Réactiver les heures sélectionnées
            setSelectedTime(dateTime);
            onDateTimeChange(dateTime);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
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
                onClickDay={handleDateChange}
            />
            {selectedDate && (
                <div className="flex gap-4">
                    {getTimesForSelectedDate().map((time, i) => (
                        <div
                            key={`time-${i}`}
                            className={`time rounded-sm p-2 ${
                                isBefore(time, now)
                                    ? "bg-red-100 text-red-500 cursor-not-allowed"
                                    : "bg-gray-100 cursor-pointer"
                            }`}
                        >
                            <button
                                type="button"
                                onClick={() => handleDateTimeChange(time)}
                                disabled={isBefore(time, now)}
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
