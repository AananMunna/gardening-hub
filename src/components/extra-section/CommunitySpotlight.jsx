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
<>
<section className="py-16 px-6 bg-green-50 dark:bg-gray-900">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6">🌱 Daily Growth Affirmations</h2>
    <p className="text-gray-700 dark:text-gray-300 text-lg mb-10">Let your mind grow alongside your garden.</p>

    <div className="space-y-8 text-left">
      <blockquote className="text-xl text-green-900 dark:text-green-200 border-l-4 border-green-400 dark:border-green-500 pl-4 italic">
        “Just like my plants, I don’t need to rush — I grow beautifully in my own time.”
      </blockquote>
      <blockquote className="text-xl text-green-900 dark:text-green-200 border-l-4 border-green-400 dark:border-green-500 pl-4 italic">
        “Even on cloudy days, roots are growing beneath the surface.”
      </blockquote>
      <blockquote className="text-xl text-green-900 dark:text-green-200 border-l-4 border-green-400 dark:border-green-500 pl-4 italic">
        “Every fallen leaf is part of my progress — I let go to grow.”
      </blockquote>
      <blockquote className="text-xl text-green-900 dark:text-green-200 border-l-4 border-green-400 dark:border-green-500 pl-4 italic">
        “I nurture my surroundings, and they nourish me in return.”
      </blockquote>
    </div>
  </div>
</section>

    <section className="py-16 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Community Spotlight
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        See what's growing in our community this week
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {communityPosts.map((post) => (
        <div
          key={post.id}
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-green-700 transition-shadow duration-300 ${
            post.isTopPost
              ? "lg:col-span-2 border-2 border-yellow-300 dark:border-yellow-500"
              : "border border-gray-100 dark:border-gray-700"
          }`}
        >
          {post.isTopPost && (
            <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-300 px-4 py-2 flex items-center">
              <FaTrophy className="mr-2" />
              <span className="font-semibold">Top Post This Week</span>
            </div>
          )}

          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-green-200 dark:border-green-600"
              />
              <span className="font-bold text-gray-800 dark:text-gray-100">
                {post.user}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>

            <div className="mb-4 rounded-lg overflow-hidden shadow-sm dark:shadow-none">
              <img
                src={post.image}
                alt="Community post"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex justify-between text-gray-500 dark:text-gray-400">
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
      <Link
        to="/ShareTip"
        className="px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
      >
        Join the Community Conversation
      </Link>
    </div>
  </div>
</section>

<section className="py-16 px-4 bg-green-50 dark:bg-gray-800">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 text-center mb-8">Gardener’s Q&A</h2>
    <div className="space-y-6">
      {[
        {
          q: "How often should I water my succulents?",
          a: "Succulents prefer dry soil. Water once every 10-14 days, and ensure good drainage.",
        },
        {
          q: "What vegetables grow best in small spaces?",
          a: "Tomatoes, radishes, lettuce, and spinach are great choices for limited space gardens.",
        },
        {
          q: "How do I naturally get rid of garden pests?",
          a: "Neem oil, garlic spray, and companion planting can help repel common pests.",
        },
      ].map((faq, index) => (
        <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">{faq.q}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

</>
  );
}