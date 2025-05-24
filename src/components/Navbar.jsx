import { use, useContext, useState } from "react";
import { FaLeaf, FaSun, FaUser, FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import ProfileDropdown from "./ProfileDropdown";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = use(AuthContext);
  // console.log(user);



  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-600 dark:from-gray-900 dark:to-gray-800 text-white shadow-lg">
  <div className="container mx-auto px-4">
    {/* Main Navbar */}
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <FaLeaf className="text-3xl text-emerald-300 dark:text-lime-400" />
        <Link to='/' className="text-2xl font-bold font-serif tracking-wider text-white dark:text-lime-100">
          GardenHub
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {[
          { to: "/", label: "Home" },
          { to: "/ExploreGardeners", label: "Explore Gardeners" },
          { to: "/BrowseTips", label: "Browse Tips" },
          { to: "/ShareTip", label: "Share a Tip" },
          { to: "/MyTips", label: "My Tips" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="nav-link px-4 py-2 rounded-lg hover:bg-green-800 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <span className="text-white dark:text-gray-100">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="p-3 rounded-full cursor-pointer bg-green-800 bg-opacity-30 dark:bg-gray-700 dark:bg-opacity-40 hover:bg-opacity-50 transition-all hover:rotate-12"
          title="Toggle Theme"
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaLeaf className="text-lime-400" />}
        </button>

        {/* Profile Dropdown */}
        <ProfileDropdown user={user} />

        {!user && (
          <div className="space-x-2 hidden md:flex">
            <NavLink
              to="/login"
              className="px-6 py-3 bg-green-700 dark:bg-gray-700 hover:bg-green-800 dark:hover:bg-gray-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-6 py-3 border-2 border-green-700 dark:border-gray-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:bg-green-700 dark:hover:bg-gray-600 hover:-translate-y-1"
            >
              Register
            </NavLink>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-md hover:bg-green-700 dark:hover:bg-gray-700 focus:outline-none transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden pb-4 space-y-3 mt-2">
        {[
          { to: "/", label: "Home" },
          { to: "/ExploreGardeners", label: "Explore Gardeners" },
          { to: "/BrowseTips", label: "Browse Tips" },
          { to: "/ShareTip", label: "Share a Tip" },
          { to: "/MyTips", label: "My Tips" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsMenuOpen(false)}
            className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-700 dark:hover:bg-gray-700 transition-all mx-2 text-white"
          >
            {item.label}
          </NavLink>
        ))}

        {!user && (
          <div className="flex space-x-2 px-2">
            <NavLink
              to="/login"
              className="px-6 py-3 bg-green-700 dark:bg-gray-700 hover:bg-green-800 dark:hover:bg-gray-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-6 py-3 border-2 border-green-700 dark:border-gray-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:bg-green-700 dark:hover:bg-gray-600 hover:-translate-y-1"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    )}
  </div>
</nav>

  );
}
