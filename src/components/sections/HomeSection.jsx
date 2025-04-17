import HomeProductCard from "../ui/UI/HomeProductCard";
import { homeProductData } from "../../data/homeproductdata";

function HomeSection() {
  const HomeProducts = homeProductData; // Import the product data from the data file
 return (
    <section>
      <div className="relative block w-full">
        <picture>
          <img className="block w-full h-full object-cover mt-0" src="//www.lifelongindiaonline.com/cdn/shop/files/Homepage.png?v=1727800656" alt="HomeCollectionSection" />
        </picture>
        <div alt ="Home-Collection-Wrapper" className="absolute inset-0 flex items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 lg:p-50 z-10">
          <div className="flex justify-between items-center w-full h-auto">
            <div alt="leftsection" className="absolute inset-0 flex items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 lg:p-50 z-10">
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
            <div alt="rightsection">
              <h2 className="text-white">Best Sellers</h2>
              <a href="/collections/best-sellers"
                className="inline-flex items-center justify-center text-xs font-semibold text-[#B21F28] bg-white mt-2 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 w-auto h-auto"
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