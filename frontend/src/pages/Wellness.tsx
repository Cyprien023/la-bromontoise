import spa1 from '/images/spa1.webp';
import spa2 from '/images/spa2.webp';

export default function Wellness() {
    return (
        <div className="bg-white text-gray-800 font-roboto px-6 py-36 max-w-6xl mx-auto space-y-20">
            <section className="text-center">
                <h1 className="text-5xl font-bold text-[#4d5e3c] mb-10">Espace Bien-être</h1>
                <p className="text-lg mb-4">
                    A votre disposition de <strong>8h30 à 19h00</strong> – <span className="font-semibold">Accès gratuit*</span>
                </p>
                <p className="text-lg mb-4">
                    SPA - Cabine Infrarouge - Tapis de course - Plate-forme vibrante (machine de fitness)
                </p>
                <p className="text-lg mb-4">
                    Une cabine de change est à votre disposition. Les serviettes sont dans votre chambre.
                </p>
                <p className="text-lg italic">
                    *Gratuité pour les chambres d’hôtes. Participation de 10 euros la demi-heure par personne pour le gîte.
                </p>

                <hr className="my-10 border-t border-gray-300" />

                <p className="text-lg mb-4">
                    <strong>At your disposal from 8:30am until 7pm – free access*</strong>
                </p>
                <p className="text-lg mb-4">
                    Spa with changing room – tanning cabin – treadmill – fitness machine
                </p>
                <p className="text-lg mb-4">
                    Towels can be found in the bedrooms.
                </p>
                <p className="text-lg italic">
                    *Free for B&B guests. €10/person/30 mins for gîte occupants
                </p>
            </section>

            <section className="text-center">
                <h2 className="text-4xl font-bold text-[#4d5e3c] mb-6">Le Spa Pegas de la marque Poséidon</h2>
                <p className="text-lg mb-8">
                    Profitez de notre luxueux spa Pegas signé Poséidon, alliant technologie, design et confort pour un moment de détente absolue.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <img src={spa1} alt="Spa Pegas Poseidon" className="w-full h-96 object-cover rounded-lg shadow-md" />
                    <img src={spa2} alt="Spa Pegas Poseidon intérieur" className="w-full h-96 object-cover rounded-lg shadow-md" />
                </div>
            </section>
        </div>
    );
}
