import React from "react";

const categories = [
  {
    title: "Health & Fitness",
    items: ["Sports & Fitness", "Massagers & Wellness", "Personal Grooming"],
    colors: ["bg-blue-500", "bg-red-500", "bg-green-500"],
  },
  {
    title: "Home Essentials",
    items: ["Home & Kitchen", "Home Improvement", "Electronics", "Baby"],
    colors: ["bg-purple-500", "bg-indigo-500", "bg-yellow-500", "bg-teal-500"],
  },
];

const ads = [
  { title: "600W Handheld Vacuum", discount: "63% OFF", price: "Rs. 2,799.00", original: "Rs. 7,499.00" },
  { title: "Adjustable Dumbbells", discount: "72% OFF", price: "Rs. 6,999.00", original: "Rs. 24,999.00" },
];

const HomePage = () => {
  return (
    <div className="bg-gray-100 p-6 mt-40 z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-bold">{category.title}</h2>
              <div className={`grid grid-cols-${category.items.length} gap-4 mt-4`}>
                {category.items.map((item, idx) => (
                  <div key={idx} className={`p-4 ${category.colors[idx]} text-white rounded-lg`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (Advertisements) */}
        <div className="space-y-6">
          {ads.map((ad, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
              <h3 className="font-bold text-lg">{ad.title}</h3>
              <p className="text-red-500 font-bold text-xl">{ad.discount}</p>
              <p className="text-gray-600">
                {ad.price} <del className="text-gray-400">{ad.original}</del>
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;