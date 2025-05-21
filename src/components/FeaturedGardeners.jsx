import { FaLeaf, FaSeedling, FaInstagram, FaTwitter, FaFacebookF, FaStar, FaRegStar } from 'react-icons/fa';

// Static data remains the same
const gardeners = [
  {
    id: 1,
    name: "Sarah Greenfield",
    expertise: "Organic Vegetables",
    experience: "8 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    tipsShared: 42,
    rating: 4.9,
    coverPhoto: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Miguel Herrera",
    expertise: "Tropical Plants",
    experience: "5 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 28,
    rating: 4.7,
    coverPhoto: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    name: "Priya Patel",
    expertise: "Hydroponics",
    experience: "6 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 35,
    rating: 4.8,
    coverPhoto: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "James Wilson",
    expertise: "Rose Cultivation",
    experience: "10 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 56,
    rating: 5.0,
    coverPhoto: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: "Linh Nguyen",
    expertise: "Balcony Gardening",
    experience: "4 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    tipsShared: 19,
    rating: 4.5,
    coverPhoto: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 6,
    name: "Thomas Meyer",
    expertise: "Composting",
    experience: "7 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 31,
    rating: 4.6,
    coverPhoto: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

export default function FeaturedGardeners() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header remains the same */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <FaLeaf className="text-3xl text-green-600 mr-2" />
            <span className="text-sm font-semibold tracking-wider text-green-600 uppercase">
              Our Community
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Gardeners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our most active gardening experts sharing their knowledge with the community
          </p>
        </div>

        {/* Gardeners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardeners.map((gardener) => (
            <div 
              key={gardener.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Cover Photo */}
              <div className="relative h-32 bg-green-600 overflow-hidden">
                <img 
                  src={gardener.coverPhoto} 
                  alt={`${gardener.name}'s cover`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Profile Picture with Active Badge */}
              <div className="relative px-4">
                <div className="absolute -top-12 left-4 border-4 border-white rounded-full overflow-hidden">
                  <img 
                    src={gardener.image} 
                    alt={gardener.name}
                    className="w-24 h-24 object-cover"
                  />
                </div>
                  {/* Active Badge */}
                  {gardener.status === "active" && (
                    <div className="absolute -bottom-10 left-25 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
              </div>
              
              {/* Profile Info */}
              <div className="pt-16 px-4 pb-4">
                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{gardener.name}</h3>
                  <p className="text-gray-600 text-sm">{gardener.expertise}</p>
                </div>
                
                {/* Stats */}
                <div className="border-t border-b border-gray-200 py-3 my-3">
                  <div className="flex justify-around text-center">
                    <div>
                      <p className="font-bold text-gray-800">{gardener.tipsShared}</p>
                      <p className="text-xs text-gray-500">Tips</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{gardener.experience}</p>
                      <p className="text-xs text-gray-500">Experience</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(gardener.rating) ? 
                            <FaStar key={i} className="text-yellow-400 text-sm" /> : 
                            <FaRegStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                {/* <div className="flex justify-center space-x-4 mt-4 pt-3 border-t border-gray-200">
                  <a href="www.facebook.com" target='_blank' className="text-gray-500 hover:text-green-600 transition-colors">
                    <FaInstagram className="text-lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                    <FaFacebookF className="text-lg" />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            View All Gardeners
          </button>
        </div> */}
      </div>
    </section>
  );
}