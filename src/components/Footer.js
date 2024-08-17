import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    {/* Contact Information */}
                    <div className="mb-6 sm:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="mb-2">
                            <span className="font-semibold">Email:</span> joenetuban@gmmail.com
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Phone:</span> 0956 027 3240
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Address:</span> Barangay Culiat Quezon City Metro Manila 1128
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-6 sm:mb-0">
                        <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Jhong1021" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/johntuban" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com/johntuban" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Joene Tuban. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
