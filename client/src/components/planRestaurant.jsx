import React, { useState } from 'react';
import Navigation from "./_navbar.jsx";

const PlanRestaurant = () => {
    const initialTables = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        reserved: false
    }));

    const [tables, setTables] = useState(initialTables);

    const handleReserve = (id) => {
        setTables(tables.map(table =>
            table.id === id ? { ...table, reserved: !table.reserved } : table
        ));
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navigation />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Plan du Restaurant</h2>
                <div className="grid grid-cols-5 gap-8">
                    {tables.map(table => (
                        <button
                            key={table.id}
                            className={`relative w-20 h-20 flex items-center justify-center rounded-full text-lg font-bold focus:outline-none ${table.reserved ? 'bg-red-500' : 'bg-green-500'}`}
                            onClick={() => handleReserve(table.id)}
                        >
                            <span className="absolute top-0 right-0 bg-gray-800 text-xs px-2 py-1 rounded-bl-full rounded-tr-full">{table.id}</span>
                            <span className="absolute bottom-0 left-0 bg-gray-800 text-xs px-2 py-1 rounded-br-full rounded-tl-full">{table.reserved ? 'Réservée' : 'Disponible'}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanRestaurant;
