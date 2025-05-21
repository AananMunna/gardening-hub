import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const dummyTip = {
  title: "How I Grow Tomatoes Indoors",
  plantType: "Vegetable",
  difficulty: "Medium",
  description: "I use a south-facing window and organic soil...",
  imageUrl: "https://img.freepik.com/free-photo/ripe-red-tomatoes-greenhouse_1150-11052.jpg",
  category: "Indoor Gardening",
  availability: "Public",
  userName: "John Doe",
  userEmail: "john@example.com",
};

const UpdateTip = () => {
  const tipData = useLoaderData();
  // console.log(tipData._id);
  const [tip, setTip] = useState(tipData);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    // Backend update logic here
    fetch(`http://localhost:3000/tips/${tipData._id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(tip)
})
  .then(res => res.json())
  .then(data => {
    if(data.modifiedCount){
      Swal.fire({
  title: "Updated Successfully!",
  icon: "success",
  draggable: true
});
    }
  })
  .catch(err => console.error("Update failed:", err));

  };

  return (
    <div className="min-h-screen bg-[#f4f7f3] py-10 px-4 md:px-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-green-100">
        <h2 className="text-2xl font-bold text-[#2e4d2c] mb-6">
          🌿 Update Your Garden Tip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              type="text"
              value={tip.title}
              onChange={(e) => setTip({ ...tip, title: e.target.value })}
              className="w-full mt-1 p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Plant Type/Topic</label>
            <input
              type="text"
              value={tip.topic}
              onChange={(e) => setTip({ ...tip, topic: e.target.value })}
              className="w-full mt-1 p-3 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-600">Difficulty</label>
              <select
                value={tip.difficulty}
                onChange={(e) => setTip({ ...tip, difficulty: e.target.value })}
                className="w-full mt-1 p-3 border rounded-lg"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Category</label>
              <select
                value={tip.category}
                onChange={(e) => setTip({ ...tip, category: e.target.value })}
                className="w-full mt-1 p-3 border rounded-lg"
              >
                <option>Composting</option>
                <option>Plant Care</option>
                <option>Vertical Gardening</option>
                <option>Indoor Gardening</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Availability</label>
              <select
                value={tip.availability}
                onChange={(e) => setTip({ ...tip, availability: e.target.value })}
                className="w-full mt-1 p-3 border rounded-lg"
              >
                <option>Public</option>
                <option>Hidden</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Image URL</label>
            <input
              type="text"
              value={tip.imageUrl}
              onChange={(e) => setTip({ ...tip, imageUrl: e.target.value })}
              className="w-full mt-1 p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              value={tip.description}
              onChange={(e) => setTip({ ...tip, description: e.target.value })}
              rows="4"
              className="w-full mt-1 p-3 border rounded-lg"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">User Name</label>
              <input
                type="text"
                value={tip.userName}
                readOnly
                className="w-full cursor-not-allowed mt-1 p-3 border bg-gray-100 text-gray-500 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">User Email</label>
              <input
                type="email"
                value={tip.userEmail}
                readOnly
                className="w-full cursor-not-allowed mt-1 p-3 border bg-gray-100 text-gray-500 rounded-lg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 cursor-pointer bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            ✅ Update Tip
          </button>

          {success && (
            <p className="mt-4 text-green-600 font-medium">Tip updated successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;
