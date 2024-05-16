import { Link } from 'react-router-dom';
import Navigation from "./_navbar.jsx";
import platImage from '/src/images/assiette.jpg';
import saladeImage from '/src/images/salade.jpg';
import tarteImage from '/src/images/tarte.jpg';
import restoImage from '/src/images/restaurant.jpg';

const Menu = () => {
    return (
        <div className="py-16 bg-gray-800 text-white font-bold-inika " style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),url(${restoImage})`, backgroundSize: 'cover'}}>
            <Navigation />

            {/* Hero Section */}
            <section className="py-32 bg-menu-image bg-cover bg-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold-inika mb-4">Notre Menu</h1>
                    <p className="text-lg md:text-xl mb-8 font-inika">Découvrez nos plats signature et nos créations saisonnières</p>
                </div>
            </section>

            {/* Restaurant Photos */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src={saladeImage} alt="Restaurant" className="rounded-lg shadow-lg object-cover w-full h-full" />
                    <img src={platImage} alt="Restaurant" className="rounded-lg shadow-lg object-cover w-full h-full" />
                    <img src={tarteImage} alt="Restaurant" className="rounded-lg shadow-lg object-cover w-full h-full" />
                </div>
            </section>

            {/* Menu Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Entrées */}
                        <div>
                            <h2 className="text-2xl font-bold-inika mb-4">Entrées</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold-inika">Salade de betteraves</h3>
                                    <span className="text-primary-500 font-bold">12€</span>
                                </div>
                                <p className="text-gray-400">Betteraves rôties, chèvre frais, noix de pécan, vinaigrette balsamique</p>
                            </div>
                        </div>

                        {/* Plats */}
                        <div>
                            <h2 className="text-2xl font-bold-inika mb-4">Plats</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold-inika">Filet de saumon</h3>
                                    <span className="text-primary-500 font-bold">22€</span>
                                </div>
                                <p className="text-gray-400">Filet de saumon grillé et son écrasé de pommes de terre, légumes de saison</p>
                            </div>
                        </div>

                        {/* Desserts */}
                        <div>
                            <h2 className="text-2xl font-bold-inika mb-4">Desserts</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">Tarte aux pommes</h3>
                                    <span className="text-primary-500 font-bold">8€</span>
                                </div>
                                <p className="text-gray-400">Tarte fine aux pommes, glace vanille, caramel beurre salé</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Padding en bas de page */}
            <div className="h-16"></div>
        </div>
    );
};

export default Menu;