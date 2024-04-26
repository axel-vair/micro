import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Calendar from "./components/calendar.jsx";
import './assets/calendar.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Register />
      <Login />
      <Calendar />
  </React.StrictMode>,
)
