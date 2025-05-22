import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 px-6 text-center animate__animated animate__fadeIn">
  <h1 className="text-9xl font-extrabold text-green-300 dark:text-green-700 animate-pulse select-none">
    404
  </h1>
  <h2 className="text-3xl md:text-5xl font-bold text-green-900 dark:text-green-300 mb-4">
    Oops! Page Not Found
  </h2>
  <p className="text-green-700 dark:text-green-400 max-w-xl mb-8 text-lg">
    The page you’re looking for might have been removed or is temporarily unavailable.
  </p>

  <Link
    to="/"
    className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    ⬅ Go Back Home
  </Link>
</div>

  );
};

export default NotFound;
