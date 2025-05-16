import homeImage from '../assets/homepng.png';
import commun1 from '../assets/commun1.jpeg';
import commun2 from '../assets/commun2.jpeg';

export default function Home() {
    return (
        <div className="bg-white text-gray-900 font-['Roboto']">
            <header className="flex justify-between items-center px-20 py-6">
                <h1 className="text-2xl font-bold">La Bromontoise</h1>
            </header>

            <section className="text-center py-24 relative">
                <h2 className="text-5xl font-semibold mb-8">Vivez la tranquillité.</h2>
                <div className="relative mx-auto w-[90%] max-w-4xl">
                    <div className="absolute inset-0 rounded-3xl bg-olive-300 -z-10 h-[60%] top-[20%]" />
                    <img
                        src={homeImage}
                        alt="accueil"
                        className="rounded-3xl shadow-xl border-4 border-white"
                    />
                </div>
                <p className="mt-12 text-gray-600">Un havre de paix au cœur de la nature.</p>
            </section>

            <section className="px-8 md:px-20 py-20 bg-[#f9f9f9] text-center">
                <h3 className="text-3xl md:text-4xl font-semibold mb-6">Un lieu de charme en Auvergne</h3>
                <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
                    Au cœur de la France, au milieu du Parc Naturel des Volcans d'Auvergne, à 13 km de Vulcania, cette demeure du XVIIIe siècle entre confort, raffinement et convivialité, vous accueille toute l'année pour vous faire passer un agréable séjour.
                    <br /><br />
                    A guest house in the Auvergne region, in the Puy-de-Dôme, at Bromont Lamothe, near Vulcania. In the heart of France, in the midst of the regional nature park of the Auvergne volcanoes, this XVIIIth century dwelling place offering comfort, refinement and conviviality is open all year round for you to enjoy a pleasant stay.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <img src={commun1} alt="Salon traditionnel" className="rounded-xl shadow-lg w-full object-cover" />
                    <img src={commun2} alt="Salon moderne" className="rounded-xl shadow-lg w-full object-cover" />
                </div>
            </section>
        </div>
    );
}
