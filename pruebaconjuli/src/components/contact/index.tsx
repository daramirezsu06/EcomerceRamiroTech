"use client";
import { useState } from "react";


function Contact(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      console.log(formData); 
  };

  return (
    <>
      <div className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-neutral-800 text-center mb-8">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md p-2 border"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md p-2 border"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md p-2 border"
                    rows={5}></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Submit
                </button>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-lg">
                <span className="font-semibold">Email:</span> Dararamirezsu@gmail.com
              </p>
              <p className="text-lg">
                <span className="font-semibold">Phone:</span> +57 3205045033
              </p>
              <p className="text-lg">
                <span className="font-semibold">Address:</span> 123 Tech Street,
                Techville, TV 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
