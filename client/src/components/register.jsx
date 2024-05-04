import {useState} from 'react';
import axios from 'axios';
import Navigation from "./_navbar.jsx";

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        lastname: '',
        firstname: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/users/register', formData)
            .then(response => {
                console.log(response.data);
                // Gérer la réponse en fonction de vos besoins
            })
            .catch(error => {
                console.error('Erreur lors de la requête:', error);
                // Gérer les erreurs en fonction de vos besoins
            });
    };

    return (
        <>
            <Navigation />
            <h1>Formulaire d'inscription</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange}/>

                <label>Nom</label>
                <input name="lastname" type="text" value={formData.lastname} onChange={handleChange}/>

                <label>Prénom</label>
                <input name="firstname" type="text" value={formData.firstname} onChange={handleChange}/>

                <label>Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange}/>

                <button type="submit">S'inscrire</button>
            </form>
        </>
    );
}

export default Register;