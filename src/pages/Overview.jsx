import { use, useEffect, useState } from "react";
import {
  FiUser,
  FiList,
  FiFolder,
  FiUsers,
  FiMessageCircle,
  FiHeart,
} from "react-icons/fi";
import { AuthContext } from "../context/AuthProvider";

const Overview = () => {

  const [tips, setTips ] = useState(null)
  const [myTips, setMyTips ] = useState(null)
  // console.log(myTips);

  
  // console.log(tips);
    useEffect(() => {
      let dynamicURL = `https://gardening-hub-server.vercel.app/tips`
      fetch(dynamicURL)
        .then((res) => res.json())
        .then((data) => {
          setTips(data);
        })
        .catch((err) => {
          console.error("Error fetching tips:", err);
  
        });
    }, []);

      useEffect(() => {
    fetch(`https://gardening-hub-server.vercel.app/mytips/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
      })
      .catch((err) => {
        console.error("Error fetching gardeners:", err);
      });
  }, []);

  const stats = [
    {
      label: "Total Tips",
      value: tips?.length,
      icon: <FiList />,
      color: "from-[#a7f3d0] to-[#34d399]",
    },
    {
      label: "My Tips",
      value: myTips?.length,
      icon: <FiFolder />,
      color: "from-[#bbf7d0] to-[#22c55e]",
    },
    {
      label: "Public Tips",
      value: "7",
      icon: <FiUsers />,
      color: "from-[#d9f99d] to-[#84cc16]",
    },
    {
      label: "Private Tips",
      value: "245+",
      icon: <FiUser />,
      color: "from-[#bef264] to-[#65a30d]",
    },
    {
      label: "New Comments",
      value: "36",
      icon: <FiMessageCircle />,
      color: "from-[#86efac] to-[#16a34a]",
    },
    {
      label: "Total Likes",
      value: "1290+",
      icon: <FiHeart />,
      color: "from-[#6ee7b7] to-[#059669]",
    },
  ];

  const {user} = use(AuthContext)
//   console.log(user);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#2f2f2f] dark:text-[#f0fdf4]">
            👋 Hello, {user?.displayName ? user?.displayName : 'There'}
          </h1>
          <p className="text-[#475569] dark:text-[#94a3b8]">
            Welcome back to your Gardening Dashboard
          </p>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-[#2f2f2f] dark:text-[#f0fdf4]">
        🌿 Garden Stats Overview
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between bg-gradient-to-tr ${stat.color} text-[#065f46] dark:text-[#f0fdf4] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300`}
          >
            <div>
              <p className="text-sm font-light uppercase">{stat.label}</p>
              <h2 className="text-3xl font-bold">{stat.value}</h2>
            </div>
            <div className="text-4xl opacity-80">{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
