import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">MyWebsite</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#project" className="hover:text-gray-400">Project</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#skills" className="hover:text-gray-400">Skills</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex items-center"
                >
                    {mobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6 text-white" />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-2`}>
                <div className="flex flex-col space-y-2">
                    <a href="#home" className="block p-2 text-center hover:bg-gray-700">Home</a>
                    <a href="#project" className="block p-2 text-center hover:bg-gray-700">Project</a>
                    <a href="#about" className="block p-2 text-center hover:bg-gray-700">About</a>
                    <a href="#skills" className="block p-2 text-center hover:bg-gray-700">Skills</a>
                    <a href="#contact" className="block p-2 text-center hover:bg-gray-700">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
