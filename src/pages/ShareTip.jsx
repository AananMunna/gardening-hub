const ShareTip = () => {
  const userName = "Yahya Gardener";
  const userEmail = "yahya@gardens.com";

  return (
    <div className="min-h-screen bg-[#f6f9f4] flex flex-col md:flex-row items-center justify-center p-6">
      {/* Illustration / Left */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/gardening-concept-illustration_114360-2757.jpg"
          alt="Garden illustration"
          className="w-[90%] max-w-md"
        />
      </div>

      {/* Form / Right */}
      <div className="md:w-1/2 bg-white border border-[#dfe8dc] rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-[#3b5323] mb-6 text-center">
          Share a Garden Tip 🌼
        </h2>

        <form className="space-y-4 text-sm md:text-base">
          <input
            type="text"
            placeholder="Tip Title"
            className="form-input"
          />
          <input
            type="text"
            placeholder="Plant Type / Topic"
            className="form-input"
          />
          <select className="form-input">
            <option disabled selected>Difficulty Level</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <input
            type="text"
            placeholder="Image URL"
            className="form-input"
          />
          <select className="form-input">
            <option disabled selected>Category</option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Indoor Plants</option>
          </select>
          <select className="form-input">
            <option disabled selected>Availability</option>
            <option>Public</option>
            <option>Hidden</option>
          </select>
          <textarea
            rows="4"
            placeholder="Describe your tip..."
            className="form-input resize-none"
          ></textarea>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={userName}
              readOnly
              className="form-input bg-gray-100 cursor-not-allowed"
            />
            <input
              type="email"
              value={userEmail}
              readOnly
              className="form-input bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6b8e23] hover:bg-[#56751c] text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Garden Tip 🌱
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;
