export default function Tarifs() {
    const rooms = [
        {
            name: "Chambre Anges",
            price: "135€ / nuit",
            details: "2 personnes (possibilité de 2 personnes supplémentaires : 22€/pers/nuit)",
        },
        {
            name: "Chambre Chantilly",
            price: "123€ / nuit",
            details: "2 personnes (possibilité d'1 personne supplémentaire : 22€)",
        },
        {
            name: "Chambre Alcôves",
            price: "125€ / nuit",
            details: "2 personnes",
        },
        {
            name: "Chambre Côté Jardin",
            price: "125€ / nuit",
            details: "2 personnes (possibilité 1 enfant supplémentaire)",
        },
        {
            name: "Chambre Étoile",
            price: "170€ / nuit",
            details: "2 personnes",
        },
    ];

    return (
        <div className="bg-white text-gray-800 font-roboto px-6 py-36 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-16 text-[#4d5e3c]">
                Nos Tarifs
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-[#4d5e3c] mb-2">
                            {room.name}
                        </h2>
                        <p className="text-lg text-gray-700 font-medium mb-1">
                            {room.price}
                        </p>
                        <p className="text-gray-600">{room.details}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-[#f9fafb] p-6 rounded-xl shadow-inner text-gray-700 space-y-4">
                <h3 className="text-xl font-semibold text-[#4d5e3c]">
                    Informations complémentaires
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Taxe de séjour en supplément</li>
                    <li>Petit déjeuner et accès au spa inclus</li>
                    <li>Enfant à partir de 6 ans uniquement</li>
                    <li>Animaux non admis</li>
                </ul>
            </div>
        </div>
    );
}
