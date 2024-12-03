import React from "react";
import { motion } from "framer-motion";
import Furniture from "../assets/images/furnitureshop.png";
import Gym from "../assets/images/gym.png";
import Cat from "../assets/images/meowcart.png";
import todoList from "../assets/images/todo list.png";

const ProductGrid = () => {
  const images = [
    {
      id: 1,
      src: Furniture,
      alt: "Photo by Minh Pham",
      label: "Timber & Trend",
      colSpan: "col-span-1",
      link: "https://furniture-shop-liart.vercel.app/",
      animation: { opacity: 0, y: -50 }, // Fade Down
    },
    {
      id: 2,
      src: Gym,
      alt: "Photo by Magicle",
      label: "Strenght Station",
      colSpan: "col-span-2",
      link: "https://strenghtstation.vercel.app/",
      animation: { opacity: 0, x: 50 }, // Fade Right
    },
    {
      id: 3,
      src: todoList,
      alt: "Photo by Martin Sanchez",
      label: "Todo List App",
      colSpan: "col-span-2",
      link: "https://todo-list-app-tau-eight.vercel.app/",
      animation: { opacity: 0, x: -50 }, // Fade Left
    },
    {
      id: 4,
      src: Cat,
      alt: "Photo by Lorenzo Herrera",
      label: "Meow Mart",
      colSpan: "col-span-1",
      link: "https://meow-cart.vercel.app/",
      animation: { opacity: 0, y: 50 }, // Fade Up
    },
  ];

  return (
    <div id="project" className="h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">My Recent Projects</h2>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image) => (
            <motion.a
              key={image.id}
              href={image.link} // Use the dynamic link
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for links opening in a new tab
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${image.colSpan}`}
              initial={image.animation} // Initial animation state
              whileInView={{ opacity: 1, x: 0, y: 0 }} // Final visible state
              viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
              transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {image.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;