import React, { useEffect, useState } from "react";
import { FaLeaf, FaStar, FaRegStar } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";

export default function FeaturedGardeners() {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
// console.log(gardeners);
  useEffect(() => {
    fetch("https://gardening-hub-server.vercel.app/gardeners/active")
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gardeners:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center mb-4">
        <FaLeaf className="text-3xl text-green-600 dark:text-green-400 mr-2" />
        <span className="text-sm font-semibold tracking-wider text-green-600 dark:text-green-400 uppercase">
          Meet the Experts
        </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Featured Gardeners
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Our top gardeners are here to share their passion and knowledge with you.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gardeners.map((gardener) => (
        <div
          key={gardener._id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-black/40 overflow-hidden hover:shadow-lg dark:hover:shadow-black/60 transition-shadow duration-300"
        >
          {/* Cover Placeholder */}
          <div className="h-28 bg-green-600 dark:bg-green-700"></div>

          {/* Profile Image */}
          <div className="relative px-4">
            <div className="absolute -top-12 left-4 border-4 border-white dark:border-gray-800 rounded-full overflow-hidden w-24 h-24">
              <img
                src={gardener.photoUrl}
                alt={gardener.name}
                className="w-full h-full object-cover"
              />
            </div>
            {gardener.status === "active" && (
              <div className="absolute top-2 left-[88px] w-5 h-5 bg-green-500 dark:bg-green-400 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
            )}
          </div>

          {/* Info */}
          <div className="pt-16 px-4 pb-4">
            <div className="text-center mb-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{gardener.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{gardener.specialty}</p>
            </div>

            <div className="flex justify-around text-center text-sm py-2 border-t border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{gardener.experience}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Experience</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{gardener.location}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Location</p>
              </div>
              <div>
                <div className="flex items-center justify-center text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                  <FaRegStar className="text-sm" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Rating</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
