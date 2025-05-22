import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    login(email, password)
      .then((userCredential) => {
        // console.log("Login successful:", userCredential.user);
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        setError("Invalid email or password.");
        // console.error(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log("Google login successful:", result.user);
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        setError("Google login failed.");
        // console.error(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  };

  return (
   <div
  className="min-h-screen dark:bg-gray-950 bg-cover bg-center flex items-center justify-center px-4"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1590080876642-d2d2e914c9c1?auto=format&fit=crop&w=1470&q=80')",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-lg dark:shadow-black"
  >
    <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 text-center mb-6">
      🌿 Welcome Back Gardener!
    </h2>

    {error && (
      <p className="text-red-600 dark:text-red-400 text-sm text-center mb-4">
        {error}
      </p>
    )}

    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-sm text-green-800 dark:text-green-400 font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-green-800 dark:text-green-400 font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-md font-semibold"
      >
        Login
      </button>
    </form>

    <div className="my-4 text-center text-green-800 dark:text-green-400">OR</div>

    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition text-white py-2 rounded-md font-semibold"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
        alt="Google"
        className="w-5 h-5"
      />
      Sign in with Google
    </button>

    <p className="mt-4 text-sm text-center text-green-800 dark:text-green-400">
      Don't have an account?{" "}
      <Link to="/register" className="text-green-600 dark:text-green-500 underline">
        Register Here
      </Link>
    </p>
  </motion.div>
</div>

  );
};

export default Login;
