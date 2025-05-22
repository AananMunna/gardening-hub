import { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router";

const dummyTips = [
  {
    id: 1,
    title: "Composting Made Easy",
    category: "Composting",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1560180474-e8563fd75bab",
  },
  {
    id: 2,
    title: "Pruning Roses Like a Pro",
    category: "Plant Care",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0",
  },
  {
    id: 3,
    title: "Hydroponic Basil Guide",
    category: "Hydroponics",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1587049352842-4c0e6f1c177f",
  },
  {
    id: 4,
    title: "Balcony Jungle Ideas",
    category: "Balcony Gardening",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1615486364771-71a871baae36",
  },
  {
    id: 5,
    title: "Eco Pest Control",
    category: "Plant Care",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1615812071191-4f5b1147ef94",
  },
  {
    id: 6,
    title: "Vertical Garden Secrets",
    category: "Vertical Gardening",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1623261193964-b1f207c0d73f",
  },
];

const TopTrendingTips = () => {
  const [tips, setTips] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://localhost:3000/trending")
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
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold flex items-center justify-center gap-2 text-green-700 dark:text-green-400">
        <FaSeedling className="text-green-600 dark:text-green-400" />
        Top Trending Tips
      </h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Discover expert gardening tips trending right now 🌱
      </p>
    </div>

    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {tips.map((tip) => (
        <div
          key={tip.id}
          className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-black/40 rounded-xl overflow-hidden group relative border border-green-100 dark:border-green-800 hover:shadow-2xl dark:hover:shadow-green-900 transition-all duration-300"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={tip.imageUrl}
              alt={tip.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute top-2 left-2 bg-green-600 dark:bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {tip.category}
            </div>
          </div>
          <div className="p-5 space-y-2">
            <h3 className="text-xl font-bold text-[#2e7d32] dark:text-green-400 group-hover:text-green-800 dark:group-hover:text-green-300 transition">
              {tip.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Difficulty:{" "}
              <span className="font-medium text-[#4caf50] dark:text-green-500">
                {tip.difficulty}
              </span>
            </p>
            <div className="mt-3">
              <Link
                to={`tipDetails/${tip._id}`}
                className="text-sm px-4 py-2 bg-[#4caf50] dark:bg-green-600 text-white rounded-full hover:bg-[#2e7d32] dark:hover:bg-green-700 transition duration-300"
              >
                Read Tip
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-[#a8e6a3] to-green-300 dark:from-green-700 dark:via-green-600 dark:to-green-700 opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TopTrendingTips;
