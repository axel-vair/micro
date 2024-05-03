import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import './assets/calendar.css';
import Table from "./components/table.jsx";
import Bookings from "./components/bookings.jsx";
import BookingForm from "./components/bookingForm.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Register />
      <Login />
      <Table />
      <Bookings />
      <BookingForm />
  </React.StrictMode>,
)
