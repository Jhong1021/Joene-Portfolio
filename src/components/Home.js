import React from "react";
import Swal from "sweetalert2";
import "./TypeWriter.css";

const handleDownload = (e) => {
  e.preventDefault();

  try {
    const link = document.createElement("a");
    link.href = "/images/Joene Tuban Resume.pdf";
    link.download = "Joene_Tuban_Resume.pdf";

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
  return (
    <section
      id="home"
      className="relative bg-gray-50 h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/high/4k-laptop-programming-screen-qqc7448qd1hefmgs.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional: Overlay for better text visibility */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-white relative">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Hi!👋 I'm Joene Tuban
            <br />
            <strong className="font-extrabold text-red-700 sm:block whitespace-nowrap typewriter">
              Front-end Developer
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Hello! I'm Joene Tuban, a passionate Front-end Developer who loves
            creating interactive web experiences. With expertise in modern
            technologies and a keen eye for design, I build user-friendly
            solutions that look great and work seamlessly.
          </p>

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

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Home;
