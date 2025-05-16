import { useState, type Key } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Room = {
    name: string;
    image: string;
    images: string[];
    description: string;
};

const rooms: Room[] = [
    {
        name: "Étoile",
        image: "/images/etoile1.jpeg",
        images: ["/images/etoile1.jpeg", "/images/etoile2.jpeg"],
        description: "La chambre Étoile vous invite à rêver sous une atmosphère douce et lumineuse.",
    },
    {
        name: "Alcôves",
        image: "/images/alcoves1.jpeg",
        images: ["/images/alcoves1.jpeg", "/images/alcoves2.jpeg"],
        description: "Intimité et charme ancien s'entrelacent dans la chambre Alcôves, idéale pour se ressourcer.",
    },
    {
        name: "Côté Jardin",
        image: "/images/cote-jardin1.jpeg",
        images: ["/images/cote-jardin1.jpeg", "/images/cote-jardin2.jpeg"],
        description: "Vue sur jardin et déco florale : cette chambre respire la nature et la sérénité.",
    },
    {
        name: "Anges",
        image: "/images/anges1.jpeg",
        images: ["/images/anges1.jpeg", "/images/anges2.jpeg"],
        description: "Empreinte de douceur et de poésie, la chambre Anges est parfaite pour une pause paisible.",
    },
    {
        name: "Chantilly",
        image: "/images/chantilly1.jpeg",
        images: ["/images/chantilly1.jpeg", "/images/chantilly2.jpeg"],
        description: "Chaleureuse et raffinée, la chambre Chantilly vous enveloppe dans une atmosphère cosy.",
    },
];

export default function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="bg-white text-gray-800 font-roboto px-6 py-36 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-16 text-[#4d5e3c]">Nos Chambres</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                        <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-[#4d5e3c] mb-2">{room.name}</h2>
                            <p className="text-gray-600 mb-4">{room.description}</p>
                            <button
                                className="text-sm text-[#4d5e3c] font-bold hover:underline"
                                onClick={() => setSelectedRoom(room)}
                            >
                                Découvrir &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedRoom && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
                        <button
                            onClick={() => setSelectedRoom(null)}
                            className="absolute top-3 right-3 text-gray-500 text-sm hover:text-gray-800"
                            aria-label="Fermer la fenêtre modale"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-semibold text-[#4d5e3c] mb-4 mt-4">{selectedRoom.name}</h2>
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                            {selectedRoom.images.map((img, i: Key) => (
                                <div key={i}>
                                    <img src={img} alt={`${selectedRoom.name} ${Number(i) + 1}`}
                                         className="rounded-lg" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </div>
    );
}
