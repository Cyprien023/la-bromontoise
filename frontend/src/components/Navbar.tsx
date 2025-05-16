import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import * as React from "react";

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <Transition
            show={isVisible}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
        >
            <nav className="fixed top-0 left-0 w-full z-50 p-7 flex justify-between items-center bg-white shadow-md">
                <a href="/">
                <h1 className="text-5xl font-bold text-[#4d5e3c] grape-nuts">La Bromontoise</h1>
                </a>

                <div className="ml-[-40px] space-x-10 pr-4">
                    <a href="chambres" className="text-xl font-bold hover:text-[#4d5e3c]">Chambres</a>
                    <a href="bien-etre" className="text-xl font-bold hover:text-[#4d5e3c]">Bien-être</a>
                    <a href="tarifs" className="text-xl font-bold hover:text-[#4d5e3c]">Tarifs</a>
                    <a href="contact" className="text-xl font-bold hover:text-[#4d5e3c]">Contact</a>
                    <a
                        href=".../public/CV.pdf"
                        download="CV Luzuy Cyprien.pdf"
                        className="bg-[#a2ad94] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#4d5e3c] transition-all duration-300"
                    >
                        🎫 Reserver
                    </a>
                </div>
            </nav>
        </Transition>
    );
};

export default Navbar;

