import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Bookings from "./components/bookings.jsx";
import BookingForm from "./components/bookingForm.jsx";
import './assets/calendar.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/book" element={<BookingForm/>} />
                <Route path="/bookings" element={<Bookings />} />
            </Routes>
        </Router>
    </React.StrictMode>,
)
