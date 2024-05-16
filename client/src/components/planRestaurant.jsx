import React, { useState } from 'react';
import Navigation from "./_navbar.jsx";

const PlanRestaurant = () => {
    // État initial des tables : toutes disponibles (false signifie non réservée)
    const initialTables = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        reserved: false
    }));

    const [tables, setTables] = useState(initialTables);

    const handleReserve = (id) => {
        setTables(tables.map(table =>
            table.id === id ? { ...table, reserved: !table.reserved } : table
        ));
        console.log(id);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navigation />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Plan du Restaurant</h2>
                <div className="grid grid-cols-5 gap-4">
                    {tables.map(table => (
                        <button
                            key={table.id}
                            className={`w-16 h-16 flex items-center justify-center rounded-full text-lg font-bold ${table.reserved ? 'bg-red-500' : 'bg-green-500'}`}
                            onClick={() => handleReserve(table.id)}
                        >
                            {table.id}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanRestaurant;
