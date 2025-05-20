import { FaLeaf, FaSeedling, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

// Static data (will be replaced with dynamic data later)
const gardeners = [
  {
    id: 1,
    name: "Sarah Greenfield",
    expertise: "Organic Vegetables",
    experience: "8 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    tipsShared: 42,
    rating: 4.9
  },
  {
    id: 2,
    name: "Miguel Herrera",
    expertise: "Tropical Plants",
    experience: "5 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 28,
    rating: 4.7
  },
  {
    id: 3,
    name: "Priya Patel",
    expertise: "Hydroponics",
    experience: "6 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 35,
    rating: 4.8
  },
  {
    id: 4,
    name: "James Wilson",
    expertise: "Rose Cultivation",
    experience: "10 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 56,
    rating: 5.0
  },
  {
    id: 5,
    name: "Linh Nguyen",
    expertise: "Balcony Gardening",
    experience: "4 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    tipsShared: 19,
    rating: 4.5
  },
  {
    id: 6,
    name: "Thomas Meyer",
    expertise: "Composting",
    experience: "7 years",
    status: "active",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tipsShared: 31,
    rating: 4.6
  }
];

export default function FeaturedGardeners() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gardeners.map((gardener) => (
            <div 
              key={gardener.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              {/* Gardener Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={gardener.image} 
                  alt={gardener.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Active Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Active
                </div>
              </div>

              {/* Gardener Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{gardener.name}</h3>
                  <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    <FaSeedling className="mr-1" />
                    {gardener.rating}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 font-medium">{gardener.expertise}</p>
                  <p className="text-gray-500 text-sm">Experience: {gardener.experience}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="bg-green-50 rounded-lg px-3 py-1">
                    <p className="text-sm text-green-700 font-medium">
                      <span className="font-bold">{gardener.tipsShared}</span> tips shared
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition-colors">
                      <FaInstagram />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition-colors">
                      <FaTwitter />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 transition-colors">
                      <FaFacebookF />
                    </a>
                  </div>
                </div>

                <button className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            View All Gardeners
          </button>
        </div>
      </div>
    </section>
  );
}