import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
// import { Link } from "react-router";

const dummyTips = [
  {
    id: "1",
    title: "Grow Tomatoes Indoors",
    category: "Indoor Gardening",
    image: "https://img.freepik.com/free-photo/ripe-red-tomatoes-greenhouse_1150-11052.jpg",
    availability: "Public",
  },
  {
    id: "2",
    title: "DIY Compost Bin",
    category: "Composting",
    image: "https://img.freepik.com/free-photo/close-up-hands-holding-compost_23-2149021694.jpg",
    availability: "Hidden",
  },
];

const MyTips = () => {
  const [tips, setTips] = useState(dummyTips);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setTips(tips.filter((tip) => tip.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f3] py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2e4d2c] mb-6">🌱 My Garden Tips</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-green-100">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-green-100 text-[#2f4f2f] uppercase text-xs">
              <tr>
                <th scope="col" className="px-6 py-4">Image</th>
                <th scope="col" className="px-6 py-4">Title</th>
                <th scope="col" className="px-6 py-4">Category</th>
                <th scope="col" className="px-6 py-4">Availability</th>
                <th scope="col" className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip) => (
                <tr
                  key={tip.id}
                  className="border-b hover:bg-green-50 transition duration-300"
                >
                  <td className="px-6 py-4">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">{tip.title}</td>
                  <td className="px-6 py-4">{tip.category}</td>
                  <td className="px-6 py-4">{tip.availability}</td>
                  <td className="px-6 py-4 text-center flex gap-2 justify-center">
                    <a to={`/update-tip/${tip.id}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition flex items-center gap-1">
                        <Pencil size={16} />
                        Update
                      </button>
                    </a>
                    <button
                      onClick={() => setDeleteId(tip.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Confirm Delete Modal */}
        {deleteId && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-2xl border border-green-100">
              <h3 className="text-xl font-semibold text-[#2e4d2c] mb-4">
                🗑️ Confirm Deletion
              </h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this tip?</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setDeleteId(null)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTips;
