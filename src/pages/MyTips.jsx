import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

// const dummyTips = [
//   {
//     id: "1",
//     title: "Grow Tomatoes Indoors",
//     category: "Indoor Gardening",
//     image: "https://img.freepik.com/free-photo/ripe-red-tomatoes-greenhouse_1150-11052.jpg",
//     availability: "Public",
//   },
//   {
//     id: "2",
//     title: "DIY Compost Bin",
//     category: "Composting",
//     image: "https://img.freepik.com/free-photo/close-up-hands-holding-compost_23-2149021694.jpg",
//     availability: "Hidden",
//   },
// ];

const MyTips = () => {
  
  const [deleteId, setDeleteId] = useState(null);
  
  // const handleDelete = (id) => {
  //   setTips(tips.filter((tip) => tip.id !== id));
  //   setDeleteId(null);
  // };
  
  const [tips, setTips] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://localhost:3000/tips")
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
      return (
        <LoadingSpinner />
      );
    }

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
            {tips ? <tbody>
              {tips.map((tip) => (
                
                <tr
                  key={tip.id}
                  className="border-b hover:bg-green-50 transition duration-300"
                >
                  <td className="px-6 py-4">
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">{tip.title}</td>
                  <td className="px-6 py-4">{tip.category}</td>
                  <td className="px-6 py-4">{tip.availability}</td>
                  <td className="px-6 py-4 text-center flex gap-2 justify-center">
                    <Link to={`/tip/${tip._id}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition flex items-center gap-1">
                        <Pencil size={16} />
                        Update
                      </button>
                    </Link>
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
            </tbody> : <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
  <div className="max-w-md mx-auto">
    <svg 
      className="w-20 h-20 mx-auto text-gray-400 mb-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Your Garden of Knowledge is Empty
    </h1>
    <p className="text-lg text-gray-600 mb-8">
      You haven't shared any gardening tips yet. Start cultivating our community by sharing your wisdom!
    </p>
    <Link 
      to="/ShareTip"
      className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
        />
      </svg>
      Share Your First Tip
    </Link>
  </div>
</div>}
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
