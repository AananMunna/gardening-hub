import { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router";

const TopTrendingTips = () => {
  const [tips, setTips] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(tips);
  useEffect(() => {
    fetch("https://gardening-hub-server.vercel.app/trending")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gardeners:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  // console.log(tips)
  return (
    <section className="py-16 bg-[#f0f9f2] dark:bg-gray-900 text-[#2f4f2f] dark:text-green-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-2 text-green-700 dark:text-green-400">
            <FaSeedling className="text-green-600 dark:text-green-400" />
            Top Trending Tips
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Discover expert gardening tips trending right now 🌱
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-gray-800 shadow-md dark:shadow-black/30 rounded-lg overflow-hidden group relative border border-green-100 dark:border-green-800 hover:shadow-xl dark:hover:shadow-green-900 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-2 left-2 bg-green-600 dark:bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded">
                  {tip.category}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>
                    Difficulty:{" "}
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {tip.difficulty}
                    </span>
                  </span>
                  <span>
                    👍{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      {tip.totalLike}
                    </span>
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#2e7d32] dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition">
                  {tip.title}
                </h3>

                <Link
                  to={`tipDetails/${tip._id}`}
                  className="inline-block mt-2 text-xs px-3 py-1 bg-[#4caf50] dark:bg-green-600 text-white rounded-full hover:bg-[#2e7d32] dark:hover:bg-green-700 transition"
                >
                  Read Tip
                </Link>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-[#a8e6a3] to-green-300 dark:from-green-700 dark:via-green-600 dark:to-green-700 opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTrendingTips;
