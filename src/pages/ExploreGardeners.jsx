import React from "react";
import Swal from "sweetalert2";

const gardeners = [
  {
    id: 1,
    name: "Alice Green",
    age: 34,
    gender: "Female",
    status: "Active",
    experience: "10 years",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    totalTips: 42,
    bio: "Specializes in urban gardening and sustainable practices.",
  },
  {
    id: 2,
    name: "Mark Bloom",
    age: 41,
    gender: "Male",
    status: "Active",
    experience: "15 years",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    totalTips: 58,
    bio: "Passionate about vertical gardening and hydroponics.",
  },
  {
    id: 3,
    name: "Emma Roots",
    age: 29,
    gender: "Female",
    status: "Inactive",
    experience: "5 years",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    totalTips: 20,
    bio: "Expert in composting and organic fertilizers.",
  },
  {
    id: 4,
    name: "John Leaf",
    age: 38,
    gender: "Male",
    status: "Active",
    experience: "12 years",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    totalTips: 35,
    bio: "Focused on landscape gardening and native plants.",
  },
  {
    id: 5,
    name: "Sophia Bloom",
    age: 45,
    gender: "Female",
    status: "Active",
    experience: "20 years",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    totalTips: 70,
    bio: "Gardening coach specializing in greenhouse setups.",
  },
  {
    id: 6,
    name: "David Sprout",
    age: 33,
    gender: "Male",
    status: "Inactive",
    experience: "8 years",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    totalTips: 28,
    bio: "Enthusiast of permaculture and soil health.",
  },
];

const ExploreGardeners = () => {
  return (
<div className="bg-green-50 dark:bg-gray-900 min-h-screen py-12 px-6 md:px-16 lg:px-24">
  <h1 className="text-4xl font-extrabold text-green-900 dark:text-green-300 mb-10 text-center drop-shadow-lg">
    🌿 Explore Gardeners
  </h1>

  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {gardeners.map((gardener) => (
      <div
        key={gardener.id}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
      >
        <div className="relative h-56 w-full">
          <img
            src={gardener.image}
            alt={gardener.name}
            className="object-cover w-full h-full rounded-t-2xl"
            loading="lazy"
          />
          <span
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
              gardener.status === "Active"
                ? "bg-green-500 text-white dark:bg-green-600"
                : "bg-gray-400 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
            }`}
          >
            {gardener.status}
          </span>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-1">
            {gardener.name}
          </h2>
          <p className="text-green-700 dark:text-green-400 font-semibold mb-2">
            {gardener.bio}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-green-800 dark:text-green-300 mb-4">
            <div>
              <span className="font-semibold">Age:</span> {gardener.age}
            </div>
            <div>
              <span className="font-semibold">Gender:</span> {gardener.gender}
            </div>
            <div>
              <span className="font-semibold">Experience:</span> {gardener.experience}
            </div>
            <div>
              <span className="font-semibold">Shared Tips:</span> {gardener.totalTips}
            </div>
          </div>

          <button
            type="button"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={() =>
              Swal.fire({
                title: "Private Profile",
                text: "This user has set their profile to private. You can't view it at the moment.",
                icon: "info",
                confirmButtonText: "Okay",
                confirmButtonColor: "#3085d6",
                background: "#f7f9fc",
                timer: 4000,
                timerProgressBar: true,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
                },
              })
            }
          >
            View Profile
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ExploreGardeners;
