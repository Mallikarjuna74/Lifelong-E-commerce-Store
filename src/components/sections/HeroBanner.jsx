import React, { useState } from 'react';


const PrevArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const NextArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// --- 1. Define Data for Slides ---
// (You can move this to a separate data file if it gets large)
const slidesData = [
  {
    id: 1,
    imageUrl: "//www.lifelongindiaonline.com/cdn/shop/files/Mask_group_54.png?v=1727785883",
    altText: "Sports and Fitness collection banner",
    title: "Sports & Fitness",
    description: "Empowering your everyday active lifestyle with tools built for every stride, lift, and leap.",
    linkUrl: "/collections/sports-fitness",
    linkLabel: "Explore"
  },
  {
    id: 2,
    // Replace with your second image URL
    imageUrl:"//www.lifelongindiaonline.com/cdn/shop/files/Mask_group_4.jpg?v=1731314868",
    altText: "Massageers & Wellness", // Replace alt text
    title: "Massageers & Wellness", // Replace title
    description: "Enhacing your wellbeing with well crafted wellness essentials that bring relaxation and balance home", // Replace description
    linkUrl: "/collections/Massageers-Wellness", // Replace link
    linkLabel: "Explore"
  },
  {
    id: 3,
    // Replace with your third image URL
    imageUrl: "//www.lifelongindiaonline.com/cdn/shop/files/Mask_group_5.jpg?v=1731314926",
    altText: "Home & Kitchen", // Replace alt text
    title: "Home & Kitchen", // Replace title
    description: "Elevating your everyday home experience with intuitive, durable tools for every room.", // Replace description
    linkUrl: "/collections/Home-kitchen", // Replace link
    linkLabel: "Explore"
  },
  {
    id: 4,
    // Replace with your fourth image URL
    imageUrl: "//www.lifelongindiaonline.com/cdn/shop/files/Mask_group_6.jpg?v=1731314901",
    altText: "Electronics", // Replace alt text
    title: "Electronics", // Replace title
    description: "Simplifying your tech life with dependable, user-friendly electronics for a connected lifestyle.", // Replace description
    linkUrl: "/collections/Electronics", // Replace link
    linkLabel: "Explore"
  },
];



function Herobanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () =>{
    setCurrentSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
  }
  const handleNext = () =>{
    setCurrentSlide((prev)=>(prev === slidesData.length - 1 ? 0 : prev + 1));
  }
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  }

  // Get the data for the currently active slide
  const activeSlide = slidesData[currentSlide];
  return (
    <section>
      <div className=" block w-full relative">
      <button
          type="button"
          className="slick-prev absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-1 border-white hover:bg-white/80 text-white rounded-full cursor-pointer transition-colors duration-600"
          aria-label="Previous Slide"
          onClick={handlePrev}
        >
          <PrevArrowIcon />
        </button>



        {/* --- 5. Image Rendering (Dynamic) --- */}  
        {/* Optional: Add transition classes for smooth effect */}
        <div className="relative w-full h-auto"> {/* Wrapper for image and text */}
          <img
            key={activeSlide.id} // Add key for potential transition effects
            className="block w-full h-auto object-cover transition-opacity duration-500 ease-in-out" // Added transition
            src={activeSlide.imageUrl}
            loading="eager" // Only eager load the first image ideally, others lazy
            alt={activeSlide.altText}
          />
          {/* --- 6. Text Content Overlay (Dynamic) --- */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 lg:p-50 z-10">
             {/* Add key here if you want text transitions too */}
            <div key={activeSlide.id + '-text'} className="max-w-lg p-6 rounded-lg transition-opacity duration-500 ease-in-out"> {/* Increased bg opacity slightly */}
              <h2 className="text-white text-2xl md:text-2xl lg:text-4xl mb-4 font-normal">
                {activeSlide.title} {/* Dynamic Title */}
              </h2>
              <p className="text-white text-base md:text-xs mb-6 font-semibold max-w-80">
                {activeSlide.description} {/* Dynamic Description */}
              </p>
              <a
                href={activeSlide.linkUrl} // Dynamic Link URL
                className="inline-flex items-center justify-center text-xs font-semibold text-[#B21F28] bg-white mt-2 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 w-auto h-auto"
              >
                {activeSlide.linkLabel} {/* Dynamic Link Label */}
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8" stroke="#B21F28"></circle>
                  <path d="M11.3536 8.85355C11.5488 8.65829 11.5488 8.34171 11.3536 8.14645L8.17157 4.96447C7.97631 4.7692 7.65973 4.7692 7.46447 4.96447C7.2692 5.15973 7.2692 5.47631 7.46447 5.67157L10.2929 8.5L7.46447 11.3284C7.2692 11.5237 7.2692 11.8403 7.46447 12.0355C7.65973 12.2308 7.97631 12.2308 8.17157 12.0355L11.3536 8.85355ZM5 9H11V8H5V9Z" fill="#B21F28"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/*Next slide button*/}
        <button
          type="button"
          className="slick-next absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-1 border-white text-white rounded-full cursor-pointer transition-colors duration-200"
          aria-label="Next Slide"
          onClick={handleNext} // Add onClick handler
        >
          <NextArrowIcon />
        </button>
      

        <ul className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2 z-20 p-0 m-0 list-none bg-[#0000004D] border-transparent rounded-full px-2 h-6"> {/* Transparent bg, white border, rounded, padding, height */}
          {slidesData.map((slide, index) => (
            <li key={slide.id}>
              <button
                type="button"
                className={`block w-2.5 h-2.5 rounded-full transition-colors duration-200 focus:outline-0 focus:ring-4 focus:ring-white/50 ${ // Adjusted size slightly
                  index === currentSlide
                    ? 'bg-white border border-white' // Active: white fill, white border
                    : 'bg-transparent border border-white hover:bg-white/30' // Inactive: transparent fill, white border, hover effect
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
              >
                {/* Intentionally empty */}
              </button>
            </li>
          ))}
        </ul>

        
        
      </div>
    </section>
  );
}
export default Herobanner; // Export Herobanner as a named export

