import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Register />
      <Login />
  </React.StrictMode>,
)
