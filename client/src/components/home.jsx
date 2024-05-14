import {Link} from 'react-router-dom';
import Navigation from "./_navbar.jsx";


const Home = () => {
    return (

        <div className="bg-gray-900 text-white">
            <Navigation/>
            {/* Hero Section */}
            <section className="py-32 bg-hero-image bg-cover bg-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Café des délices</h1>
                    <p className="text-lg md:text-xl mb-8">Découvrez une expérience culinaire unique dans un cadre
                        élégant et contemporain.</p>
                    <Link to="/menu"
                          className="inline-block bg-blue-500 text-primary-500 font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300">
                        Découvrir le menu
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">À propos de nous</h2>
                        <p className="mb-4">
                            Saveurs Modernes est un restaurant qui célèbre les saveurs authentiques dans un cadre
                            contemporain. Nous mettons l'accent sur l'utilisation d'ingrédients frais et de saison pour
                            créer des plats uniques et savoureux.
                        </p>
                        <p>
                            Notre équipe de chefs passionnés travaille avec soin pour vous offrir une expérience
                            culinaire inoubliable. Venez découvrir notre restaurant et laissez-vous surprendre par nos
                            créations.
                        </p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/600x400" alt="Restaurant"
                             className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Réservez votre table dès maintenant</h2>
                    <p className="mb-8">
                        Profitez d'une expérience culinaire exceptionnelle dans un cadre élégant et moderne.
                    </p>
                    <Link to="/book"
                          className="inline-block bg-blue-500 text-primary-500 font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300">
                        <i className="fas fa-calendar-alt mr-2"></i> Réserver une table
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;