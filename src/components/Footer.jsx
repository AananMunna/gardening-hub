import { FaLeaf, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-3xl text-emerald-300" />
              <span className="text-2xl font-bold font-serif">GardenHub</span>
            </div>
            <p className="text-green-200">
              Cultivating a community of passionate gardeners since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-300 hover:text-white transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-green-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Home</span></a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Explore Gardeners</span></a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Browse Tips</span></a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Share a Tip</span></a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-green-700 pb-2">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Gardening Blog</span></a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Seasonal Guides</span></a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Plant Care Tips</span></a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors flex items-center space-x-2"><span>Community Events</span></a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-green-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-emerald-300 mt-1" />
                <span>123 Garden Lane, Greenville</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-emerald-300" />
                <a href="mailto:hello@gardenhub.com" className="hover:text-emerald-300 transition-colors">hello@gardenhub.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-emerald-300" />
                <a href="tel:+1234567890" className="hover:text-emerald-300 transition-colors">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-green-700 my-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GardenHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}