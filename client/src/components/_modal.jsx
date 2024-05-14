import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onRequestClose }) => {
    const navigate = useNavigate();

    const handleCloseModal = () => {
        onRequestClose();
        navigate('/'); // Rediriger vers la page d'accueil
    };

    return (
        <div
            className={`modal ${isOpen ? 'modal-open' : ''}`}
            onClick={handleCloseModal}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-4">Réservation effectuée !</h2>
                <p className="mb-4">Votre réservation a été enregistrée avec succès.</p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                    onClick={handleCloseModal}
                >
                    Retour à l'accueil
                </button>
            </div>
        </div>
    );
};

export default Modal;
