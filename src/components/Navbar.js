import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Load the user's preference from localStorage
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
    }, []);

    useEffect(() => {
        // Save the user's preference to localStorage and toggle dark mode class
        localStorage.setItem('darkMode', darkMode);
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <a>
                    <img src="/images/logo2.png" alt="My Logo" className="navbar-logo" />
                </a>
            </div>

            <nav className={`navbar-menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tools">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="navbar-actions">
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? '🌙' : '☀️'}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
