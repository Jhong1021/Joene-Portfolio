import React from "react";

const About = () => {
    return (
        <section id="about" className="h-screen flex items-center pt-2">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                I am a highly dedicated individual with an unwavering commitment to delivering excellence in every task I undertake.
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                I’m really passionate about web development, and I’m always looking for ways to learn more and improve. I enjoy staying up-to-date with the latest trends and technologies.
                            </p>

                            <div className="mt-4 md:mt-8">
                                <button
                                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <img
                            alt=""
                            src="/images/aboutme.jpg"
                            className="h-40 w-full object-cover sm:h-56 md:h-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                        />

                        <img
                            alt=""
                            src="/images/contactme2.jpg"
                            className="h-40 w-full object-cover sm:h-56 md:h-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
