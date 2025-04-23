import HomeProductCard from "../ui/UI/HomeProductCard";
import { homeProductData } from "../../data/homeproductdata";
import { useState, useEffect, useRef } from "react";

function HomeSection() {
  const HomeProducts = homeProductData; // Import the product data from the data file

  const containerRef = useRef(null);
  const sliderRef = useRef(null); // Create a ref for the slider element
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current; // Get the slider element

    if (!container || !slider) return; // Ensure the container and slider are available


    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // The multiplier controls the scroll speed
        container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    const handleSroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollPercentage = (container.scrollLeft / maxScrollLeft) * 100;
      slider.style.width = `${scrollPercentage}%`; // Update the slider width based on scroll position
    };
    
    container.addEventListener('scroll', handleSroll); // Add scroll event listener to the container

    return () => {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mousemove', handleMouseMove);
      container.removeEventListener('scroll', handleSroll); // Clean up the scroll event listener
    };
  }, [isDragging, startX, scrollLeft]); // Add dependencies to the useEffect
 return (
    <section>
      <div className="relative block w-full">
        <picture>
          <img className="block w-full h-full object-cover mt-0" src="//www.lifelongindiaonline.com/cdn/shop/files/Homepage.png?v=1727800656" alt="HomeCollectionSection" />
        </picture>
        <div alt ="Home-Collection-Wrapper" className="absolute inset-0 flex items-center md:justify-start text-center md:text-left lg: z-10">
          <div className="flex justify-between items-center w-full h-auto">
            
            <div alt="leftsection" className="w-[51%] flex md:justify-start">
              <div ref={containerRef}
                className="flex overflow-x-scroll scroll-smooth scrollbar-hide gap-5 scroll-container"
                style={{ cursor: 'grab' }}>
                  {HomeProducts.map((product) => ( 
                    <HomeProductCard 
                      key={product.id} 
                      imageUrl={product.imageUrl} 
                      altText={product.altText} 
                      productName={product.productName} 
                      price={product.price} 
                      productUrl={product.productUrl}
                    />
                  ))}
                </div>
                <div className="slider-track-container">
                  <div 
                    ref={sliderRef} 
                    className="slider-track"
                    style={{ width: '0%' }}
                    ></div>
                </div>
            </div>

            <div alt="rightsection" className="w-[49%] flex flex-col md:justify-start lg:justify-start gap-4 pl-120 pt-64">
              <h2 className="flex max-w-90 text-white text-4xl font-light">Best Sellers</h2>
              <a href="/collections/best-sellers"
                className="flex w-43 items-center text-xs font-light text-[#B21F28] bg-white mt-2 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                See All Products
                <svg className="ml-2"  width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8.5" cy="8.5" r="8" stroke="#B21F28"></circle>
                  <path d="M11.3536 8.85355C11.5488 8.65829 11.5488 8.34171 11.3536 8.14645L8.17157 4.96447C7.97631 4.7692 7.65973 4.7692 7.46447 4.96447C7.2692 5.15973 7.2692 5.47631 7.46447 5.67157L10.2929 8.5L7.46447 11.3284C7.2692 11.5237 7.2692 11.8403 7.46447 12.0355C7.65973 12.2308 7.97631 12.2308 8.17157 12.0355L11.3536 8.85355ZM5 9H11V8H5V9Z" fill="#B21F28"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection; // Export HomeSection as a named export