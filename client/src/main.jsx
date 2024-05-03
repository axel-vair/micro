import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Bookings from "./components/bookings.jsx";
import BookingForm from "./components/bookingForm.jsx";
import './assets/calendar.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Register />
      <Login />
      <Bookings />
      <BookingForm />
  </React.StrictMode>,
)
