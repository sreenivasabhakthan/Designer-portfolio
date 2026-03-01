'use client';

import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary rounded flex items-center justify-center text-white font-display text-xl font-bold">B</div>
                        <div className="hidden md:block">
                            <span className="font-display text-2xl font-bold text-gray-900 dark:text-white tracking-wider block leading-none">Bhakthan</span>
                            <span className="text-[0.6rem] font-bold text-primary tracking-[0.2em] uppercase block">Designs</span>
                        </div>
                        {/* Mobile logo text view */}
                        <div className="block md:hidden ml-2">
                            <span className="font-display text-xl font-bold text-gray-900 dark:text-white tracking-wider block leading-none">Bhakthan</span>
                            <span className="text-[0.5rem] font-bold text-primary tracking-[0.2em] uppercase block mt-1">Designs</span>
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">WHO I AM</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">SERVICES</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">PORTFOLIO</a>
                        <a className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded hover:bg-primary-hover transition-transform transform hover:scale-105 shadow-lg shadow-primary/30" href="#contact">
                            GET IN TOUCH
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-800 dark:text-white hover:text-primary focus:outline-none transform transition-transform"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="material-icons-round text-3xl leading-none block">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-8 space-y-4 flex flex-col items-center">
                    <a
                        className="block w-full text-center text-lg font-medium py-3 hover:text-primary transition-colors border-b border-gray-200 dark:border-gray-800/50"
                        href="#about"
                        onClick={() => setIsOpen(false)}
                    >
                        WHO I AM
                    </a>
                    <a
                        className="block w-full text-center text-lg font-medium py-3 hover:text-primary transition-colors border-b border-gray-200 dark:border-gray-800/50"
                        href="#services"
                        onClick={() => setIsOpen(false)}
                    >
                        SERVICES
                    </a>
                    <a
                        className="block w-full text-center text-lg font-medium py-3 hover:text-primary transition-colors border-b border-gray-200 dark:border-gray-800/50"
                        href="#portfolio"
                        onClick={() => setIsOpen(false)}
                    >
                        PORTFOLIO
                    </a>
                    <a
                        className="block w-full mt-8 !mt-8 text-center px-5 py-4 bg-primary text-white text-lg font-bold rounded hover:bg-primary-hover shadow-lg shadow-primary/30"
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </nav>
    );
}
