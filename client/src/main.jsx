import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Calendar from "./components/calendar.jsx";
import './assets/calendar.css';
import Table from "./components/table.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Register />
      <Login />
      <Calendar />
      <Table />
  </React.StrictMode>,
)
