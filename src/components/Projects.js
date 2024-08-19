import React from "react";

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-16 h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <article className="flex flex-col overflow-hidden rounded-lg shadow transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
                        <img
                            alt="Project Image 1"
                            src="/images/carrent.png"
                            className="h-56 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-6 flex-1 bg-white dark:bg-gray-900">
                            <div>
                                <time datetime="2022-10-10" className="block text-xs">
                                    9th Aug 2024
                                </time>
                                <a>
                                    <h3 className="mt-0.5 text-lg font-semibold">
                                        Car Rental Website
                                    </h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed">
                                    This project is a fully responsive car rental website designed to provide users with a seamless and efficient experience when booking rental vehicles. The website features a sleek, modern design with intuitive navigation, allowing users to easily explore available vehicles, view details.
                                </p>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <a
                                    href="https://car-rental-beta-lilac.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700"
                                >
                                    Demo
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/Jhong1021/Car-Rental"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
                                >
                                    Code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Project 2 */}
                    <article className="flex flex-col overflow-hidden rounded-lg shadow transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
                        <img
                            alt="Project Image 2"
                            src="/images/shopping cart.png"
                            className="h-56 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-6 flex-1 bg-white dark:bg-gray-900">
                            <div>
                                <time datetime="2023-01-15" className="block text-xs">
                                    13th Aug 2024
                                </time>
                                <a>
                                    <h3 className="mt-0.5 text-lg font-semibold">
                                        Shopping Checkout
                                    </h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed">
                                    This project is an E-Commerce Checkout Application built with React. It provides a seamless shopping experience, allowing users to browse products, add them to their cart, and proceed to checkout. The application showcases modern web development techniques and leverages various technologies to deliver a smooth, interactive user experience.
                                </p>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <a
                                    href="https://shopping-checkout-react-q7hgawa5c-joenetuban-gmailcoms-projects.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700"
                                >
                                    Demo
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/Jhong1021/Shopping-Checkout-React"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
                                >
                                    Code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Project 3 */}
                    <article className="flex flex-col overflow-hidden rounded-lg shadow transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
                        <img
                            alt="Project Image 3"
                            src="/images/fitnessapp.png"
                            className="h-56 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="flex flex-col justify-between p-4 sm:p-6 flex-1 bg-white dark:bg-gray-900">
                            <div>
                                <time datetime="2024-02-20" className="block text-xs">
                                    15th Aug 2024
                                </time>
                                <a>
                                    <h3 className="mt-0.5 text-lg font-semibold">
                                        Fitness Tracking App
                                    </h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed">
                                    This is a comprehensive fitness tracking application built with modern web technologies. It allows users to log their workouts, track progress, and set fitness goals. The app provides an intuitive interface and visualizations to help users stay motivated and on track with their fitness journey.
                                </p>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <a
                                    href="https://fitness-tracking-app.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700"
                                >
                                    Demo
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/Jhong1021/Fitness-Tracking-App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
                                >
                                    Code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
