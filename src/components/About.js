import React from 'react';

const About = () => {
  return (
    <section id="about" className="about min-h-screen flex justify-center items-center bg-white dark:bg-gray-900 py-6">
      <div className="container max-w-5xl mx-auto flex flex-wrap justify-center lg:justify-between items-center px-4">
        <div className="about-content flex flex-wrap justify-center items-center lg:justify-between">

          {/* Left side: Profile Image */}
          <div className="about-image flex flex-col justify-center items-center mb-6 lg:mb-0 lg:w-1/2 px-4">
            <img
              src="images/contactme2.jpg"
              alt="Profile"
              className="w-full max-w-xs h-auto object-cover shadow-lg"
            />
            {/* Social media icons placed directly below the profile picture */}
            <div className="mt-5 flex justify-center gap-4">
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
          </div>

          {/* Right side: Self Introduction and Personal Info */}
          <div className="about-text lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Hello! I'm Joene Tuban, a passionate front-end developer with experience in creating beautiful, user-friendly websites. I love transforming designs into interactive digital experiences.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              I enjoy working with technologies like React, JavaScript, HTML5, CSS3, and TailwindCSS to bring web projects to life.
            </p>
            <div className="personal-info">
              <p className="text-gray-700 dark:text-gray-400"><strong>Cellphone No:</strong> 0956-027-3240</p>
              <p className="text-gray-700 dark:text-gray-400"><strong>Email:</strong> joenetuban@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
