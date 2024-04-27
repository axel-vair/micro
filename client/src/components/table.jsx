import { useState } from 'react';
import axios from 'axios';

function Table() {
    const [formData, setFormData] = useState({
        name: '',
        capacity: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/tables/create-table', formData)
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
            <h1>Formulaire de création de table</h1>
            <form onSubmit={handleSubmit}>
                <label>Nom de la table</label>
                <input name="name" type="text" value={formData.name} onChange={handleChange} />

                <label>Capacité</label>
                <input name="capacity" type="number" value={formData.capacity} onChange={handleChange} />

                <button type="submit">Créer la table</button>
            </form>
        </>
    );
}

export default Table