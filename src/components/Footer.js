import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 dark:bg-gray-800">
            <div className="text-center justify-center">
                <p className="text-sm">© {new Date().getFullYear()} Joene Tuban. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
