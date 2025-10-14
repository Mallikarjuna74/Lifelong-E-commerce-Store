import HomeProductCard from "../ui/UI/HomeProductCard";
import { homeProductData } from "../../data/homeproductdata";
import { useDragScroll } from "../../hooks/useDragScrollHook"; // Import the custom hook
import { Link } from "react-router-dom";

function HomeSection() {
  const HomeProducts = homeProductData; // Import the product data from the data file
  const { containerRef, sliderRef} = useDragScroll(); // Use the custom hook for drag scroll functionality

   // Helper function to generate slugs from product names
  const slugify = (text) => {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars (alphanumeric, underscore, hyphen)
      .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
  };

  
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
                    <Link to={`/Products/${slugify(product.productName)}`} key={product.id}>
                      <HomeProductCard 
                       
                      imageUrl={product.imageUrl} 
                      altText={product.altText} 
                      productName={product.productName} 
                      price={product.price} 
                    />
                    </Link>
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
              <Link
                to="/Products"
                className="flex w-39 items-center text-xs font-light text-[#B21F28] bg-white mt-2 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                See All Products
                <svg className="ml-2"  width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8.5" cy="8.5" r="8" stroke="#B21F28"></circle>
                  <path d="M11.3536 8.85355C11.5488 8.65829 11.5488 8.34171 11.3536 8.14645L8.17157 4.96447C7.97631 4.7692 7.65973 4.7692 7.46447 4.96447C7.2692 5.15973 7.2692 5.47631 7.46447 5.67157L10.2929 8.5L7.46447 11.3284C7.2692 11.5237 7.2692 11.8403 7.46447 12.0355C7.65973 12.2308 7.97631 12.2308 8.17157 12.0355L11.3536 8.85355ZM5 9H11V8H5V9Z" fill="#B21F28"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection; // Export HomeSection as a named export