import React from "react";

function About(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-600 to-red-300 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white bg-opacity-25 p-8 rounded-lg shadow-lg text-gray-900">
        <h2 className="text-3xl font-extrabold text-center mb-6">About</h2>
        <div className="space-y-6">
          <p className="text-lg">
            This is a project from the frontend module 4 of the Soy Henry
            bootcamp.
          </p>
          <p className="text-lg">
            Our application is a technology ecommerce that offers a wide variety
            of products. We have worked hard to provide a smooth and
            user-friendly experience.
          </p>
          <p className="text-lg">
            Users can create an account to track their orders and save their
            favorite products. Our goal is to make technology shopping
            accessible and straightforward for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
