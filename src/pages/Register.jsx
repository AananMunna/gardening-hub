import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, googleLogin } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Clear old errors
    setError("");

    register(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        // console.log("User registered and profile updated!");
        Swal.fire({
          title: "User registered and profile updated!",
          icon: "success",
          draggable: true,
        });
        navigate("/"); // Navigate to home or dashboard
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log("Google login successful:", result.user);
        Swal.fire({
          title: "Google login successful!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        // console.error("Google login error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: error.message,
        });
        setError(error.message);
      });
  };

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
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$"
            title="At least 8 characters, including 1 uppercase, 1 lowercase, and 1 special character"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-gray-600">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition duration-300"
        >
          Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
