import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-green-300 animate-pulse select-none">
        404
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-green-700 max-w-xl mb-8 text-lg">
        Sorry, the page you are looking for doesn’t exist or has been moved. Try
        going back to the homepage or check the URL.
      </p>
      <a
        to="/"
        className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
      >
        Go Back Home
      </a>

      <div className="mt-20 w-full max-w-md">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
          alt="Gardening Nature"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
