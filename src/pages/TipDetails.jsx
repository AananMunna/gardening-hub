import { useLoaderData, useParams } from "react-router";
import { Heart } from "lucide-react";
import { useState } from "react";

// const dummyTip = {
//   id: "1",
//   title: "How I Grow Tomatoes Indoors",
//   category: "Indoor Gardening",
//   image: "https://img.freepik.com/free-photo/ripe-red-tomatoes-greenhouse_1150-11052.jpg",
//   plantType: "Tomato",
//   difficulty: "Medium",
//   description: `
//     Growing tomatoes indoors can be both fun and rewarding! You'll need plenty of sunlight, a deep pot, and organic compost. I use a south-facing window and water them every 2 days. Once they start growing, support them with bamboo sticks and keep rotating them for even sunlight.
//   `,
//   availability: "Public",
//   email: "greenthumb@example.com",
//   name: "Green Thumb Gardener"
// };

const TipDetails = () => {

  const tipDetails = useLoaderData();
  // console.log(tipDetails);

  // const { id } = useParams(); // Fetch by ID later from DB
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-[#f4f7f3] min-h-screen px-4 md:px-10 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-green-100">
        <img
          src={tipDetails.imageUrl}
          alt={tipDetails.title}
          className="w-full h-72 md:h-96 object-cover"
        />

        <div className="p-6 md:p-10 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#2f4f2f]">{tipDetails.title}</h2>
              {/* <p className="text-[#446842] font-medium">{tipDetails.category}</p> */}
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className={`text-red-500 transition ${
                liked ? "fill-red-500" : "fill-none"
              }`}
            >
              <Heart
                size={28}
                fill={liked ? "red" : "none"}
                strokeWidth={1.5}
                className="hover:scale-110 transition"
              />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-[#f0f7ee] p-4 rounded-xl">
            <p><span className="font-semibold text-[#345c2c]">Category:</span> {tipDetails.category}</p>
            <p><span className="font-semibold text-[#345c2c]">Topic:</span> {tipDetails.topic}</p>
            <p><span className="font-semibold text-[#345c2c]">Difficulty:</span> {tipDetails.difficulty}</p>
            <p><span className="font-semibold text-[#345c2c]">Availability:</span> {tipDetails.availability}</p>
            <p><span className="font-semibold text-[#345c2c]">Shared By:</span> {tipDetails.userName} ({tipDetails.userEmail})</p>
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-semibold text-[#2d4722] mb-2">🌱 Description</h3>
            <p className="text-gray-700 leading-relaxed">{tipDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
