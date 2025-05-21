// import { Link } from "react-router";
import { Eye } from "lucide-react";
import { Link } from "react-router";

const dummyTips = [
  {
    id: 1,
    title: "How I Grow Tomatoes Indoors",
    category: "Indoor Gardening",
    image:
      "https://img.freepik.com/free-photo/ripe-red-tomatoes-greenhouse_1150-11052.jpg",
  },
  {
    id: 2,
    title: "Composting Made Easy",
    category: "Composting",
    image:
      "https://img.freepik.com/free-photo/compost-bin-full-organic-waste_53876-123674.jpg",
  },
  {
    id: 3,
    title: "Vertical Garden on a Balcony",
    category: "Vertical Gardening",
    image:
      "https://img.freepik.com/free-photo/vertical-garden-balcony-urban_53876-133337.jpg",
  },
];

const BrowseTips = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f3] px-4 py-10 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#345c2c] mb-8 text-center">
        🌿 Browse Public Gardening Tips
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-green-200 bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-[#d4e8cc] text-[#2f4f2f] uppercase text-sm md:text-base">
            <tr>
              <th className="py-4 px-6 text-left">Image</th>
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Category</th>
              <th className="py-4 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyTips.map((tip) => (
              <tr
                key={tip.id}
                className="border-t border-green-100 hover:bg-[#f0f7ee] transition duration-200"
              >
                <td className="py-3 px-6">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-16 h-16 rounded-lg object-cover border border-green-200"
                  />
                </td>
                <td className="py-3 px-6 font-semibold text-[#2d4722]">
                  {tip.title}
                </td>
                <td className="py-3 px-6 text-[#446842]">{tip.category}</td>
                <td className="py-3 px-6">
                  <Link to={`/tip/${tip.id}`}>
                    <button className="flex items-center gap-1 bg-[#6b8e23] hover:bg-[#56751c] text-white px-4 py-2 rounded-md shadow-sm transition">
                      <Eye size={18} />
                      <span className="hidden sm:inline">See More</span>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
