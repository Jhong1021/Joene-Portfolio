import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending the form (you can replace this with your actual send logic)
    setTimeout(() => {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for getting in touch. I will reply to you as soon as I can.",
        icon: "success",
        confirmButtonText: "Okay",
      });

      // Reset the form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 500); // Mock a short delay
  };

  return (
    <section
      id="contact"
      className="relative flex flex-wrap lg:h-screen lg:items-center overflow-hidden"
    >
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get in Touch</h1>
          <p className="mt-4 text-gray-500">
            If you have any questions or just want to say hello, feel free to
            drop me a message. I'll get back to you as soon as I can!
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-gray-500">
          <ul className="list-unstyled flex flex-col space-y-4">
            <li className="flex items-center space-x-2">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <span>0956 027 3240</span>
            </li>
            <li className="flex items-center space-x-2">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              <span>joenetuban@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              {/* Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Barangay Culiat, Quezon City, Philippines</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Your email"
              />
            </div>
          </div>

          {/* Message Section */}
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="w-full inline-block rounded-lg bg-[#207bff] px-5 py-3 text-sm font-medium text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-screen w-full lg:w-1/2 lg:h-full overflow-hidden">
        <img
          alt=""
          src="https://i.pinimg.com/564x/41/fa/a3/41faa3508a7b1210a03d8b6265ed7848.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
