// src/pages/Dashboard/DashboardLayout.jsx
import { Link, NavLink, Outlet } from "react-router";
import { FiHome, FiList, FiPlus, FiUser, FiLogOut, FiMenu } from "react-icons/fi";
import { useState } from "react";
import Navbar from "../components/Navbar";
// import Navbar from "../../components/Navbar"; // make sure path is correct
import Footer from './../components/Footer';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Overview", path: "/dashboard/overView", icon: <FiHome /> },
    { name: "Share a Tip", path: "/dashboard/ShareTip", icon: <FiList /> },
    { name: "My Tips", path: "/dashboard/MyTips", icon: <FiPlus /> },
    // { name: "My Items", path: "/dashboard/my-items", icon: <FiUser /> },
  ];

  return (
    <>
      <Navbar />

      <div className=" bg-gray-100 dark:bg-gray-800">
        <div className="flex min-h-screen mx-auto container">
            {/* Sidebar */}
        <aside
          className={`fixed z-40 md:static transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 w-64 bg-white dark:bg-[#111827] text-gray-800 dark:text-white p-6 shadow-lg`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <button
              className="md:hidden text-xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✖
            </button>
          </div>

          <nav className="space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition hover:text-green-500 hover:bg-green-100 dark:hover:bg-[#1f2937] ${
                    isActive
                      ? "bg-green-100 dark:bg-[#1f2937] text-green-600"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {link.icon} {link.name}
              </NavLink>
            ))}
            {/* <button className="flex items-center gap-2 px-3 py-2 mt-6 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-md font-medium transition">
              <FiLogOut /> Logout
            </button> */}
          </nav>
        </aside>

        {/* Mobile Bottom Nav Bar - looks like a real nav */}
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-[#111827] border-t border-gray-300 dark:border-gray-700 shadow-t">
  <div className="flex justify-around items-center py-2">
    <Link
      // onClick={() => setIsSidebarOpen(true)}
      to='/dashboard/overView'
      className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
    >
      <FiHome size={20} />
      <span className="text-[10px] mt-1">Overview</span>
    </Link>
    <Link
    to='/dashboard/ShareTip'
      // onClick={() => setIsSidebarOpen(true)}
      className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
    >
      <FiList size={20} />
      <span className="text-[10px] mt-1">Share</span>
    </Link>
    <Link
    to='/dashboard/MyTips'
      // onClick={() => setIsSidebarOpen(true)}
      className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
    >
      <FiPlus size={20} />
      <span className="text-[10px] mt-1">My Tips</span>
    </Link>
  </div>
</div>


        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
          <Outlet />
        </main>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
