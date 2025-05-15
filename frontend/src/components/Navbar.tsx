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
                <h1 className="text-5xl font-bold text-[#4d5e3c] grape-nuts">La Bromontoise</h1>

                <div className="ml-[-40px] space-x-10 pr-4">
                    <a href="#rooms" className="text-xl font-bold">Chambres</a>
                    <a href="#wellness" className="text-xl font-bold">Bien-être</a>
                    <a href="#pricing" className="text-xl font-bold">Tarifs</a>
                    <a href="#contact" className="text-xl font-bold">Contact</a>
                </div>
            </nav>
        </Transition>
    );
};

export default Navbar;

