import { motion } from "framer-motion";
// import { Link } from "react-router";

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1598188305475-25b769771c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
          Register to Gardenia
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$"
            title="At least 8 characters, including 1 uppercase, 1 lowercase, and 1 special character"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-gray-600">or</div>

        <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition duration-300">
          Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <a to="/login" className="text-green-700 underline">
            Login here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
