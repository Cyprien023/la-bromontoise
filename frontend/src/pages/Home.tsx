import homeImage from '../assets/homepng.png';

export default function Home() {
    return (
        <div className="bg-white text-gray-900 ">
            <header className="flex justify-between items-center px-20 py-6">
                <h1 className="text-2xl font-bold font-roboto">La Bromontoise</h1>
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

            <section className="bg-[#f6f5f3] py-20 px-6 md:px-24 text-center text-gray-800 font-roboto">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-semibold mb-8 text-[#4d5e3c]">Un lieu d'exception au cœur de l'Auvergne</h2>

                    <p className="text-lg md:text-xl leading-loose mb-10">
                        Au cœur de la France, au milieu du Parc Naturel des Volcans d'Auvergne, à 13 km de Vulcania,<br />
                        cette demeure du XVIIIe siècle, entre confort, raffinement et convivialité,<br />
                        vous accueille toute l'année pour vous faire passer un agréable séjour.
                    </p>

                    <p className="text-lg md:text-xl italic text-gray-600 leading-loose">
                        In the heart of France, in the midst of the Auvergne Volcanoes Natural Park,<br />
                        13 km from Vulcania, this 18th-century guesthouse combines comfort, charm and warmth.<br />
                        Open all year round for a peaceful and memorable stay.
                    </p>
                </div>
            </section>


        </div>
    );
}
