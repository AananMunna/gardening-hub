import { use, useState } from "react";
import { FaLeaf, FaSun, FaUser, FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

    const navigate = useNavigate();

  const {user,logout} = use(AuthContext);
  console.log(user);

  const handleLogout = () => {
  logout()
    .then(() => {
      // console.log("User signed out successfully.");
      Swal.fire({
  title: "Signed out successfully.",
  icon: "success",
  draggable: true
});
      // Optional: redirect to login or homepage
      navigate("/");
    })
    .catch((error) => {
      // console.error("Logout error:", error.message);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: error.message
});
    });
};

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo with more spacing */}
          <div className="flex items-center space-x-3">
            <FaLeaf className="text-3xl text-emerald-300" />
            <span className="text-2xl font-bold font-serif tracking-wider">
              GardenHub
            </span>
          </div>

          {/* Desktop Navigation with beautiful navlinks */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className="nav-link px-4 py-2 rounded-lg hover:bg-green-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/ExploreGardeners"
              className="nav-link px-4 py-2 rounded-lg hover:bg-green-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Explore Gardeners</span>
            </NavLink>
            <NavLink
              to="/BrowseTips"
              className="nav-link px-4 py-2 rounded-lg hover:bg-green-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Browse Tips</span>
            </NavLink>
            <NavLink
              to="/ShareTip"
              className="nav-link px-4 py-2 rounded-lg hover:bg-green-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Share a Tip</span>
            </NavLink>
            <NavLink
              to="/MyTips"
              className="nav-link px-4 py-2 rounded-lg hover:bg-green-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>My Tips</span>
            </NavLink>
          </div>

          {/* Right Side Controls with more spacing */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button className="p-3 rounded-full cursor-pointer bg-green-800 bg-opacity-30 hover:bg-opacity-50 transition-all hover:rotate-12">
              <FaSun className="text-yellow-300 text-xl" />
            </button>

            {/* User Profile Placeholder */}
<ProfileDropdown user={user} handleLogout={logout} />

            {!user && <div className=" space-x-2 hidden md:flex">
              {/* Login Button */}
              <NavLink to='/login'
                className="px-6 py-3 cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                type="button"
              >
                Login
              </NavLink>

              {/* Register Button */}
              <NavLink to='register'
                className="px-6 py-3 cursor-pointer border-2 border-green-700 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white hover:-translate-y-1"
                type="button"
              >
                Register
              </NavLink>
            </div>}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-md hover:bg-green-700 focus:outline-none transition-all"
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

        {/* Mobile Menu with beautiful spacing */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 mt-2">
            <NavLink
              to="/"
              className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-all mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/ExploreGardeners"
              className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-all mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Gardeners
            </NavLink>
            <NavLink
              to="/BrowseTips"
              className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-all mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Tips
            </NavLink>
            <NavLink
              to="/ShareTip"
              className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-all mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Share a Tip
            </NavLink>
            <NavLink
              to="/MyTips"
              className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-all mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Tips
            </NavLink>
                        {!user && <div className=" space-x-2 flex">
              {/* Login Button */}
              <NavLink to='/login'
                className="px-6 py-3 cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                type="button"
              >
                Login
              </NavLink>

              {/* Register Button */}
              <NavLink to='register'
                className="px-6 py-3 text-white cursor-pointer border-2 border-green-700  font-semibold rounded-full shadow-xl transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white hover:-translate-y-1"
                type="button"
              >
                Register
              </NavLink>
            </div>}
          </div>
        )}
      </div>
    </nav>
  );
}
