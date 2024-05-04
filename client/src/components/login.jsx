import {useState} from "react";
import axios from "axios";
import Navigation from "./_navbar.jsx";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/users/login', {email, password})
            .then(response => {
                const userData = {
                    id: response.data.user._id,
                    email: response.data.user.email,
                    role: response.data.user.role,
                };

                localStorage.setItem('user', JSON.stringify(userData));

            })
    }

    return (
        <>
            <Navigation />
            <h1>Formulaire de connexion</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type={"email"} onChange={e => setEmail(e.target.value)}/>

                <label>Password</label>
                <input type={"password"} onChange={e => setPassword(e.target.value)}/>

                <button type="submit">Se connecter</button>
            </form>
        </>
    )
}
