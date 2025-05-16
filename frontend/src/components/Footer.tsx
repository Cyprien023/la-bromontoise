import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 font-['Roboto'] mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold font-display mb-4">La Bromontoise</h2>
                    <p className="text-sm">
                        Votre havre de paix au cœur de la nature. Profitez d’un séjour relaxant et ressourçant.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold font-display mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Accueil</a></li>
                        <li><a href="/Rooms" className="hover:underline">Chambres</a></li>
                        <li><a href="/Wellness" className="hover:underline">Bien-être</a></li>
                        <li><a href="/Pricing" className="hover:underline">Tarifs</a></li>
                        <li><a href="/Contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold font-display mb-4">Suivez-nous</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 text-center py-6 text-sm font-sans">
                &copy; {new Date().getFullYear()} La Bromontoise. Tous droits réservés.
            </div>
        </footer>
    );
}
