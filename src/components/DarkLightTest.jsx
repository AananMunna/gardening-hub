import React from "react";

const DarkLightTest = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-all duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">🌗 Theme Mode Test</h1>
      <p className="text-lg mb-4">
        If you're seeing a dark background and white text, dark mode is working!
      </p>
      <div className="w-64 h-32 flex items-center justify-center rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
        <span className="text-lg">🌿 Test Box</span>
      </div>
    </div>
  );
};

export default DarkLightTest;
