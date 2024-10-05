import React from 'react';
import './Portfolio.css'; // Import your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Portfolio = () => {
    return (
        <section id="projects" className="portfolio py-20">
            <div className="portfolio-details">
                <div className="section-heading text-center mb-10">
                    <h2 className="text-2xl font-bold">My Recent Works</h2>
                </div>
                <div className="container mx-auto">
                    {/* Updated grid layout */}
                    <div className="grid grid-cols-3 grid-rows-4 gap-4 isotope">
                        {/* Item 1 */}
                        <div className="item relative row-span-2">
                            <img src="images/carrent.png" alt="portfolio image" className="portfolio-image" />
                            <div className="isotope-overlay flex items-center justify-center flex-col">
                                <a className="text-white text-lg mb-2">Car Rental Website</a>
                                <div className="overlay-icons">
                                    <a href="https://car-rental-beta-lilac.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon mr-3">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                    <a href="https://github.com/Jhong1021/Car-Rental" target="_blank" rel="noopener noreferrer" className="icon">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Item 2 */}
                        <div className="item relative row-span-2 col-start-1 row-start-3">
                            <img src="images/shopping cart.png" alt="portfolio image" className="portfolio-image" />
                            <div className="isotope-overlay flex items-center justify-center flex-col">
                                <a className="text-white text-lg mb-2">Shopping Checkout</a>
                                <div className="overlay-icons">
                                    <a href="https://shopping-checkout-react-q7hgawa5c-joenetuban-gmailcoms-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon mr-3">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                    <a href="https://github.com/Jhong1021/Shopping-Checkout-React" target="_blank" rel="noopener noreferrer" className="icon">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="item relative row-span-4 col-start-2 row-start-1">
                            <img src="images/todoapp.jpg" alt="portfolio image" className="portfolio-image" />
                            <div className="isotope-overlay flex items-center justify-center flex-col">
                                <a className="text-white text-lg mb-2">To-Do List App</a>
                                <div className="overlay-icons">
                                    <a href="https://todo-list-app-tau-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="icon mr-3">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                    <a href="https://github.com/Jhong1021/Todo-List-App" target="_blank" rel="noopener noreferrer" className="icon">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="item relative row-span-2 col-start-3 row-start-1">
                            <img src="images/gunshop.png" alt="portfolio image" className="portfolio-image" />
                            <div className="isotope-overlay flex items-center justify-center flex-col">
                                <a className="text-white text-lg mb-2">Gun Shop</a>
                                <div className="overlay-icons">
                                    <a href="https://jhong1021.github.io/Gun-Shop/" target="_blank" rel="noopener noreferrer" className="icon mr-3">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                    <a href="https://github.com/Jhong1021/Gun-Shop" target="_blank" rel="noopener noreferrer" className="icon">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="item relative row-span-2 col-start-3 row-start-3">
                            <img src="images/fitnessapp.png" alt="portfolio image" className="portfolio-image" />
                            <div className="isotope-overlay flex items-center justify-center flex-col">
                                <a href="#" className="text-white text-lg mb-2">Web Development</a>
                                <div className="overlay-icons">
                                    <a href="#" className="icon mr-3">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                    <a href="#" className="icon">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
