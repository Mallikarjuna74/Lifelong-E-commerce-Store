import { useDragScroll } from "../../hooks/useDragScrollHook";
import React from 'react'; // Import React library
import { giftData } from "../../data/giftdata";
import GiftCard from "../ui/UI/GiftCard"; // Import the GiftCard component

function GiftSection() {
    const GiftProduct = giftData; // Import the product data from the data file
    const { containerRef, sliderRef } = useDragScroll(); // Use the custom hook for drag scroll functionality

  return (
    <section className="relative">
      <div className="pt-[84px] pb-[80px] mr-12 ml-22">
        <div className="mb-[40px]">
            <h2 className="text-[36px] font-weight-300">Find the Perfect Gift</h2>
        </div>
        <div ref={containerRef}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide gap-5 gift-scroll-container"
          style={{ cursor: 'grab' }}>
            {GiftProduct.map((product, index) => ( 
              <GiftCard 
                key={index} 
                title={product.title} 
                description={product.description} 
                imageUrl={product.imageUrl} 
              />
            ))}
        </div>
        <div className="slider-track-container">
          {/* Slider track for visual feedback */}
          <div ref={sliderRef} className="slider-track" style={{ width: '20%' }}></div>
        </div>
      </div>
    </section>
  );
}

export default GiftSection; // Export GiftSection as a named export


