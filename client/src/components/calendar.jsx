import ReactCalendar from "react-calendar";
import { useState } from "react";
import { add, format } from "date-fns";
import { INTERVAL, RESTAURANT_CLOSING_TIME, RESTAURANT_OPENING_TIME } from "../constants/config.js";

const Calendar = ({ onDateTimeChange }) => {
    const [date, setDate] = useState({
        justDate: null,
        dateTime: null,
    });

    const getTimes = (selectedDate) => {
        if (selectedDate) {
            const beginning = add(selectedDate, { hours: RESTAURANT_OPENING_TIME });
            const end = add(selectedDate, { hours: RESTAURANT_CLOSING_TIME });
            const interval = INTERVAL;
            const times = [];
            for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
                times.push(i);
            }
            return times;
        }
        return [];
    };

    const times = getTimes(date.justDate);

    const handleDateTimeChange = (dateTime) => {
        setDate({ justDate: dateTime, dateTime: null }); // Reset time selection
        onDateTimeChange(dateTime);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            {date.justDate ? (
                <div className="flex gap-4">
                    {times.map((time, i) => (
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
            ) : (
                <ReactCalendar
                    minDate={new Date()}
                    className="calendar p-2"
                    view="month"
                    onClickDay={(date) => setDate({ justDate: date, dateTime: null })}
                />
            )}
        </div>
    );
};

export default Calendar;
