import {Link} from 'react-router-dom';
import Navigation from "./_navbar.jsx";
import restoImage from '/src/images/restaurant.jpg';
import logotransp from '/src/logo/logotransp.png';
import salleImage from '/src/images/salle.jpg';


const Home = () => {
    return (

        <div className="bg-gray-200 text-white font-inika-bold">
            <Navigation/>
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-hero-image bg-cover bg-center relative"style={{backgroundImage: `url(${restoImage})`}}>
                <div className="container mx-auto px-4 text-center">
                    <img src={logotransp} alt="Café des délices" className="mx-auto mb-5 md:mb-10 mt-[-0px] md:mt-0" />
                    <p className="text-2xl md:text-2xl mb-8 font-bold-inika">Découvrez une expérience culinaire unique dans un cadre
                        élégant et contemporain.</p>
                    <Link to="/menu"
                          className="text-white font-inika bg-transparent border rounded border-white border-2 py-4 px-8 text-lg hover:text-amber-600 hover:border-amber-600">
                        Découvrir le menu
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-inika-bold mb-4">À propos de nous</h2>
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
                        <img src={salleImage} alt="Restaurant" className="rounded-lg shadow-lg opacity-75"/>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary-500" style={{backgroundImage: `url(${restoImage})`, backgroundSize: 'cover', backgroundPosition: 'center bottom'}}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Réservez votre table dès maintenant</h2>
                    <p className="mb-8">
                        Profitez d'une expérience culinaire exceptionnelle dans un cadre élégant et moderne.
                    </p>
                    <Link to="/book"
                          className="text-white font-inika bg-transparent border rounded border-white border-2 py-4 px-8 text-lg hover:text-amber-600 hover:border-amber-600">
                        <i className="fas fa-calendar-alt mr-2"></i> Réserver une table
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;