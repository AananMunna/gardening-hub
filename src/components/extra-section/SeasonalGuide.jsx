import { FaCalendarAlt, FaSun, FaCloudRain, FaSnowflake, FaTree } from 'react-icons/fa';

const seasonalPlants = [
  {
    season: "Spring",
    icon: <FaTree className="text-green-500 text-2xl" />,
    plants: ["Tomatoes", "Peppers", "Basil", "Marigolds"],
    tip: "Start seeds indoors 6-8 weeks before last frost date",
    color: "bg-green-100"
  },
  {
    season: "Summer",
    icon: <FaSun className="text-yellow-500 text-2xl" />,
    plants: ["Cucumbers", "Zucchini", "Sunflowers", "Lavender"],
    tip: "Water deeply in the early morning to prevent evaporation",
    color: "bg-yellow-100"
  },
  {
    season: "Fall",
    icon: <FaCloudRain className="text-blue-500 text-2xl" />,
    plants: ["Kale", "Broccoli", "Pansies", "Garlic"],
    tip: "Plant bulbs 6-8 weeks before first hard frost",
    color: "bg-blue-100"
  },
  {
    season: "Winter",
    icon: <FaSnowflake className="text-blue-200 text-2xl" />,
    plants: ["Indoor Herbs", "Microgreens", "Amaryllis", "Paperwhites"],
    tip: "Use grow lights for 12-16 hours daily for indoor plants",
    color: "bg-blue-50"
  }
];

export default function SeasonalGuide() {
  return (
   <section className="py-16 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-green-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center mb-4">
        <FaCalendarAlt className="text-3xl text-green-600 dark:text-green-400 mr-2" />
        <span className="text-sm font-semibold tracking-wider text-green-600 dark:text-green-400 uppercase">
          Gardening Calendar
        </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Seasonal Planting Guide
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        What to plant and when for a thriving garden all year round
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {seasonalPlants.map((season, index) => (
        <div
          key={index}
          className={`${season.color} rounded-2xl shadow-md dark:shadow-lg dark:bg-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-green-700 transition-shadow duration-300`}
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              {season.icon}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-3">
                {season.season}
              </h3>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Best Plants:</h4>
              <div className="flex flex-wrap gap-2">
                {season.plants.map((plant, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-green-900 rounded-full text-sm font-medium text-gray-800 dark:text-green-300 shadow"
                  >
                    {plant}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-green-900 rounded-lg">
              <p className="text-sm font-medium text-gray-800 dark:text-green-300">
                <span className="font-bold">Pro Tip:</span> {season.tip}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}