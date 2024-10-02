import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./TypeWriter.css";
import "./Homes.css";

const handleDownload = (e) => {
  e.preventDefault();

  try {
    const link = document.createElement("a");
    link.href = "/images/Portfolio resume.pdf";
    link.download = "Joene Tuban Resume.pdf";

    // Append to the document and trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Download Successful",
      text: "Resume has been downloaded successfully!",
    });
  } catch (error) {
    // Show error alert
    Swal.fire({
      icon: "error",
      title: "Download Failed",
      text: "There was an error downloading the resume. Please try again later.",
    });
  }
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the fade-in effect on component mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger the transition
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gray-50 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/ako.png')",
      }}
    >
      {/* Add the background overlay here */}
      <div className="background-overlay"></div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-start">
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row justify-start items-start mt-20">
          {/* Left Side: Text content */}
          <div
            className={`mx-auto max-w-xl text-left lg:text-left text-white relative transition-opacity duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Hi!👋 I'm Joene Tuban
              <br />
              <strong className="font-extrabold text-red-700 sm:block whitespace-nowrap typewriter">
                Front-end Developer
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl leading-relaxed">
              Hi! I'm Joene Tuban, a Front-end Developer who creates seamless, user-friendly, and visually appealing web experiences.
            </p>

            <div className="mt-5 flex flex-wrap justify-start gap-4">
              <a
                href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s"
                  alt="Facebook"
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
                  alt="GitHub"
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
                  alt="Instagram"
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
                  alt="LinkedIn"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </a>
            </div>

            <div className="mt-8 flex justify-start gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
                onClick={handleDownload}
              >
                Download CV
              </a>

              <a
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#contact"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-12 lg:mt-8 flex flex-col items-start lg:flex-row lg:gap-4 lg:justify-start">
              {/* Techstack Title */}
              <h2 className="text-2xl font-bold text-white mb-6 lg:mb-0">Tech Stack:</h2>
              <div className="flex flex-wrap justify-start gap-4 sm:flex-col sm:items-start lg:flex-row lg:gap-4">
                <a className="transition-transform duration-200 hover:scale-110 wave-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                    alt="HTML"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a className="transition-transform duration-200 hover:scale-110 wave-2">
                  <img
                    src="https://img.icons8.com/fluent/200/css3.png"
                    alt="CSS"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a className="transition-transform duration-200 hover:scale-110 wave-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a className="transition-transform duration-200 hover:scale-110 wave-4">
                  <img
                    src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    alt="Tailwind"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a className="transition-transform duration-200 hover:scale-110 wave-5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                    alt="Bootstrap"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a className="transition-transform duration-200 hover:scale-110 wave-6">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="React"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a className="transition-transform duration-200 hover:scale-110 wave-7">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Github"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
