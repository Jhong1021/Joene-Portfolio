import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ darkMode, setDarkMode }) => {
  const [activeLink, setActiveLink] = useState("/home");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div
      className={`w-64 h-full flex flex-col justify-between ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } fixed lg:w-64 md:w-48 sm:w-16`}
    >
      <div className="px-4 py-6 flex flex-col h-full">
        <ul className="mt-0 space-y-1">
          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                src="/images/profileicon.jpg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <p className="text-xs">
                  <strong className="block font-medium">Joene Tuban</strong>
                  <span>joenetuban@gmail.com</span>
                </p>
              </div>
            </a>
          </div>
          <li>
            <Link
              to="/home"
              onClick={() => handleLinkClick("/home")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === "/home"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-blue-200 hover:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-400 border border-transparent hover:border-blue-300 dark:hover:border-blue-600`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => handleLinkClick("/projects")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === "/projects"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-blue-200 hover:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-400 border border-transparent hover:border-blue-300 dark:hover:border-blue-600`}
            >
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
                  d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === "/about"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-blue-200 hover:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-400 border border-transparent hover:border-blue-300 dark:hover:border-blue-600`}
            >
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
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/tools"
              onClick={() => handleLinkClick("/tools")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === "/tools"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-blue-200 hover:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-400 border border-transparent hover:border-blue-300 dark:hover:border-blue-600`}
            >
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
                  d="M10.447 3.553a1.25 1.25 0 0 1 1.756 0l8.5 8.5a1.25 1.25 0 0 1 0 1.756l-8.5 8.5a1.25 1.25 0 0 1-1.756-1.756L17.44 13.5H4.56l5.747 5.747a1.25 1.25 0 1 1-1.756 1.756l-8.5-8.5a1.25 1.25 0 0 1 0-1.756l8.5-8.5Z"
                />
              </svg>
              Skill
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === "/contact"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-blue-200 hover:text-blue-800 dark:hover:bg-blue-800 dark:hover:text-blue-400 border border-transparent hover:border-blue-300 dark:hover:border-blue-600`}
            >
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
                  d="M3 3.75v16.5A1.875 1.875 0 0 0 4.875 22.125H19.125A1.875 1.875 0 0 0 21 20.25V3.75A1.875 1.875 0 0 0 19.125 1.875H4.875A1.875 1.875 0 0 0 3 3.75ZM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 1.5a4.5 4.5 0 0 0-4.5 4.5v1.125a.75.75 0 0 0 .75.75h8.25a.75.75 0 0 0 .75-.75v-1.125a4.5 4.5 0 0 0-4.5-4.5Z"
                />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-5 flex space-x-2 justify-center">
          <a
            href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s"
              alt="Icon 1"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
          <a
            href="https://github.com/Jhong1021"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Icon 2"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
          <a
            href="https://www.instagram.com/joene.tuban?igsh=MWRpcm5rczQybHZtNw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              alt="Icon 3"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="Icon 4"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
        </div>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-transform duration-200 ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
        } hover:scale-105`}
      >
        {darkMode ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default Sidebar;
