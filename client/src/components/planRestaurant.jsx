import React, { useState, useEffect } from 'react';
import Navigation from "./_navbar.jsx";
import restoPlan from "../images/table_resa.jpg";
import axios from 'axios';

const PlanRestaurant = () => {
    const initialTables = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        reserved: false
    }));

    const [tables, setTables] = useState(initialTables);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/bookings/allBookings');
                const reservations = response.data;

                const reservedTables = new Set(
                    reservations
                        .filter(reservation => {
                            const reservationDate = new Date(reservation.date);
                            return (
                                reservationDate.getDate() === currentDate.getDate() &&
                                reservationDate.getMonth() === currentDate.getMonth() &&
                                reservationDate.getFullYear() === currentDate.getFullYear()
                            );
                        })
                        .map(reservation => reservation.table)
                );

                setTables(tables.map(table => ({
                    ...table,
                    reserved: reservedTables.has(table.id)
                })));
            } catch (error) {
                console.error('Erreur lors de la récupération des réservations:', error);
            }
        };
    
        fetchReservations();
    }, [currentDate]);

    const handleReserve = (id) => {
        //vide
    };

    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div className="min-h-screen flex flex-col" style={{
            backgroundImage: `url(${restoPlan})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <Navigation />
            <div className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 py-10">
            <div style={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                maxWidth: "600px",
                margin: "0 auto",
                marginTop: "50px",
                marginBottom: "50px",
                color: "white",
                textAlign: "center"
            }} className='bg-yellow-500'>
                <h1 className="text-3xl font-bold mb-2" style={{ color: "white" }}>Plan du Restaurant</h1>
                <p className="text-lg mb-2">{`Date du jour : ${currentDate.toLocaleDateString()}`}</p>
                <p className="text-lg mb-8">Si vous souhaitez réserver, <a href="/book" className="text-green-700 underline">Cliquez ici pour réserver</a>.</p>
            </div>

                <div className="grid grid-cols-5 gap-8">
                    {tables.map(table => (
                        <button
                            key={table.id}
                            className={`relative w-20 h-20 flex items-center justify-center rounded-full text-lg font-bold focus:outline-none ${table.reserved ? 'bg-red-500 cursor-not-allowed' : 'bg-yellow-500'}`}
                            onClick={() => handleReserve(table.id)}
                            disabled={table.reserved && isToday(currentDate)}
                        >
                            <span className="absolute top-0 right-0 bg-gray-800 text-xs px-2 py-1 rounded-bl-full text-white rounded-tr-full">{table.id}</span>
                            <span className="absolute bottom-0 left-0 bg-gray-800 text-xs px-2 py-1 rounded-br-full text-white rounded-tl-full">{table.reserved ? 'Réservée' : 'Disponible'}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanRestaurant;
