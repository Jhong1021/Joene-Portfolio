import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* Left side: Self Introduction and Personal Info */}
          <div className="about-image">
            <img src="images/contactme2.jpg" alt="Profile" />
          </div>

          {/* Right side: Profile Image */}
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Joene Tuban, a passionate front-end developer with experience in creating beautiful, user-friendly websites. I love transforming designs into interactive digital experiences.
            </p>
            <p>
              I enjoy working with technologies like React, JavaScript, HTML5, CSS3, and TailwindCSS to bring web projects to life.
            </p>
            <div className="personal-info">
              <p><strong>Cellphone No:</strong> 0956-027-3240</p>
              <p><strong>Email:</strong> joenetuban@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
