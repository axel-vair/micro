import { Link } from 'react-router-dom';
import Navigation from "./_navbar.jsx";

const Menu = () => {
    return (
        <div className="bg-gray-900 text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="py-32 bg-menu-image bg-cover bg-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Notre Menu</h1>
                    <p className="text-lg md:text-xl mb-8">Découvrez nos plats signature et nos créations saisonnières</p>
                </div>
            </section>

            {/* Restaurant Photos */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <img src="https://via.placeholder.com/600x400" alt="Restaurant" className="rounded-lg shadow-lg" />
                    <img src="https://via.placeholder.com/600x400" alt="Restaurant" className="rounded-lg shadow-lg" />
                    <img src="https://via.placeholder.com/600x400" alt="Restaurant" className="rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Menu Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Entrées */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Entrées</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">Salade de betteraves</h3>
                                    <span className="text-primary-500 font-bold">12€</span>
                                </div>
                                <p className="text-gray-400">Betteraves rôties, chèvre frais, noix de pécan, vinaigrette balsamique</p>
                            </div>
                        </div>

                        {/* Plats */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Plats</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-bold">Filet de saumon</h3>
                                    <span className="text-primary-500 font-bold">22€</span>
                                </div>
                                <p className="text-gray-400">Filet de saumon grillé, purée de pommes de terre, légumes de saison</p>
                            </div>
                        </div>

                        {/* Desserts */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Desserts</h2>
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