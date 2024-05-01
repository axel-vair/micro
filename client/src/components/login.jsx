import {useState} from "react";
import axios from "axios";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/users/login', {email, password})
            .then(response => {
                // Stockez les données de l'utilisateur dans le localStorage
                localStorage.setItem('user', JSON.stringify(response.data));

            })
    }



    return (
        <>
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
