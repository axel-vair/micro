import { Component } from "react";

class AdminGuard extends Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(window.localStorage.getItem("user"));
        this.state = {
            user: user,
            isAdmin: false
        };

        if (user && user.role && user.role.length > 0 && user.role.includes('admin')) {
            this.state.isAdmin = true;
        }
    }

    render() {
        if (!this.state.isAdmin) {
            // Rediriger vers une page d'erreur ou afficher un message
            return <div>Vous n'avez pas les autorisations nécessaires.</div>;
        }

        // Retourner le contenu de la page admin
        return this.props.children;
    }
}

export default AdminGuard;
