import { FaLeaf, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white pt-12 pb-6 dark:from-gray-900 dark:to-gray-800">
  <div className="container mx-auto px-4">

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

      {/* Brand Column */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <FaLeaf className="text-3xl text-emerald-300 dark:text-emerald-400" />
          <span className="text-2xl font-bold font-serif text-white dark:text-gray-100">GardenHub</span>
        </div>
        <p className="text-green-200 dark:text-green-400">
          Cultivating Link community of passionate gardeners since 2023.
        </p>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/" target='_blank' className="text-green-300 hover:text-white dark:hover:text-emerald-400 transition-colors text-xl">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/" target='_blank' className="text-green-300 hover:text-white dark:hover:text-emerald-400 transition-colors text-xl">
            <FaInstagram />
          </Link>
          <Link href="https://x.com/home" target='_blank' className="text-green-300 hover:text-white dark:hover:text-emerald-400 transition-colors text-xl">
            <FaTwitter />
          </Link>
          <Link href="https://www.youtube.com/" target='_blank' className="text-green-300 hover:text-white dark:hover:text-emerald-400 transition-colors text-xl">
            <FaYoutube />
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold border-b border-green-700 dark:border-emerald-500 pb-2 text-white dark:text-gray-100">Quick Links</h3>
        <ul className="space-y-3">
          <li><Link to="/" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Home</Link></li>
          <li><Link to="/ExploreGardeners" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Explore Gardeners</Link></li>
          <li><Link to="/BrowseTips" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Browse Tips</Link></li>
          <li><Link to="/ShareTip" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Share Link Tip</Link></li>
        </ul>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold border-b border-green-700 dark:border-emerald-500 pb-2 text-white dark:text-gray-100">Resources</h3>
        <ul className="space-y-3">
          <li><Link to="/ExploreGardeners" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Gardening Blog</Link></li>
          <li><Link to="/Seasonal" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Seasonal Guides</Link></li>
          <li><Link to="/Seasonal" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Plant Care Tips</Link></li>
          <li><Link to="/Seasonal" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors flex items-center space-x-2 text-green-200 dark:text-green-400">Community Events</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold border-b border-green-700 dark:border-emerald-500 pb-2 text-white dark:text-gray-100">Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3 text-green-200 dark:text-green-400">
            <FaMapMarkerAlt className="text-emerald-300 dark:text-emerald-400 mt-1" />
            <span>123 Garden Lane, Greenville</span>
          </li>
          <li className="flex items-center space-x-3 text-green-200 dark:text-green-400">
            <FaEnvelope className="text-emerald-300 dark:text-emerald-400" />
            <a href="mailto:hello@gardenhub.com" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors">hello@gardenhub.com</a>
          </li>
          <li className="flex items-center space-x-3 text-green-200 dark:text-green-400">
            <FaPhone className="text-emerald-300 dark:text-emerald-400" />
            <a href="tel:+1234567890" className="hover:text-emerald-300 dark:hover:text-emerald-400 transition-colors">(123) 456-7890</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-green-700 dark:border-emerald-600 my-6"></div>

    {/* Copyright */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-green-300 dark:text-emerald-400 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} GardenHub. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <Link to="/Seasonal" className="text-green-300 dark:text-emerald-400 hover:text-white dark:hover:text-white text-sm transition-colors">Privacy Policy</Link>
        <Link to="/Seasonal" className="text-green-300 dark:text-emerald-400 hover:text-white dark:hover:text-white text-sm transition-colors">Terms of Service</Link>
        <Link to="/Seasonal" className="text-green-300 dark:text-emerald-400 hover:text-white dark:hover:text-white text-sm transition-colors">Cookie Policy</Link>
      </div>
    </div>
  </div>
</footer>

  );
}