import { FaHeart, FaComment, FaShare, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router';

const communityPosts = [
  {
    id: 1,
    user: "UrbanGardener42",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content: "Just harvested my first batch of balcony-grown strawberries! 3 months of care finally paid off. #UrbanGardening #Homegrown",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    likes: 124,
    comments: 28,
    shares: 15,
    isTopPost: true
  },
  {
    id: 2,
    user: "CompostKing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content: "My compost setup after 6 months of refinement. Producing the black gold my garden loves! Any questions about the setup?",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    likes: 89,
    comments: 32,
    shares: 8,
    isTopPost: false
  },
  {
    id: 3,
    user: "FlowerPower",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content: "My pollinator garden is buzzing with life this week! Planted native wildflowers last fall and the bees are loving it.",
    image: "https://images.unsplash.com/photo-1599598177991-ec67b5c37318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    likes: 156,
    comments: 41,
    shares: 22,
    isTopPost: false
  }
];

export default function CommunitySpotlight() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Community Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what's growing in our community this week
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {communityPosts.map((post) => (
            <div 
              key={post.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${post.isTopPost ? "lg:col-span-2 border-2 border-yellow-300" : "border border-gray-100"}`}
            >
              {post.isTopPost && (
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 flex items-center">
                  <FaTrophy className="mr-2" />
                  <span className="font-semibold">Top Post This Week</span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={post.avatar} 
                    alt={post.user}
                    className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-green-200"
                  />
                  <span className="font-bold text-gray-800">{post.user}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{post.content}</p>
                
                <div className="mb-4 rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={post.image} 
                    alt="Community post"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex justify-between text-gray-500">
                  <div className="flex items-center">
                    <FaHeart className="text-red-500 mr-1" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <FaComment className="text-blue-500 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <FaShare className="text-green-500 mr-1" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to='/ShareTip' className="px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Join the Community Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}