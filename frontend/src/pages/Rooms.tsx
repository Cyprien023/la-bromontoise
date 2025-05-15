const rooms = [
    { nom: "Chambre Confort", description: "Lit double, vue jardin, salle de bain privée" },
    { nom: "Suite Deluxe", description: "Grand lit, terrasse, jacuzzi privé" },
]

export default function Rooms() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Nos Chambres</h2>
            <ul className="space-y-4">
                {rooms.map((c, i) => (
                    <li key={i} className="border p-4 rounded shadow-sm">
                        <h3 className="text-xl font-bold">{c.nom}</h3>
                        <p>{c.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
