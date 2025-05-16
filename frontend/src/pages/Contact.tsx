export default function Contact() {
    return (
        <div className="bg-white text-gray-800 font-roboto px-6 py-36 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-16 text-[#4d5e3c]">Contactez-nous</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-[#4d5e3c]">Informations</h2>
                    <p>
                        Vous avez une question ou souhaitez réserver ? N'hésitez pas à nous contacter via ce formulaire
                        ou par les moyens ci-dessous.
                    </p>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            📍 <strong>Adresse :</strong><a
                            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47f76a59e2e41ee3:0x710ef48f3fc66c6e?sa=X&ved=1t:8290&ictx=111"
                            target="_blank"
                            className="hover:underline"> 18 Pl. de la Mairie, 63230 Bromont-Lamothe </a>
                        </p>

                        <p>
                            📞 <strong>Téléphone :</strong> <a href="tel:+330782661409" className="hover:underline">07 82
                            66 14 09</a>
                        </p>
                        <p>
                            📧 <strong>Email :</strong> <a href="mailto:cyprienluzuy@gmail.com"
                                                          className="hover:underline">cyprienluzuy@gmail.com</a>
                        </p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#4d5e3c] focus:border-[#4d5e3c]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#4d5e3c] focus:border-[#4d5e3c]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            rows={5}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#4d5e3c] focus:border-[#4d5e3c]"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#4d5e3c] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#3b4a2f] transition"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}
