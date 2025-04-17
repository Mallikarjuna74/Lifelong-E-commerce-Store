import ProductCard from "../ui/UI/ProductCard";
import { products } from "../../data/Product";
function ShopifyCollectionSection() {
    const homeEssentialsProducts = products.homeEssentials; // Destructure to get home essentials products
  return (
    <section className="bg-gray-100 py-13">
        <div className="mr-18 ml-18">
            <div className="w-full h-200 p-4 flex flex-row justify-between items-center">
                <div className="grid grid-cols-2 gap-5 w-auto">
                   {homeEssentialsProducts.map((product) =>(
                    <ProductCard 
                        key={product.id}
                        imageUrl={product.imageUrl}
                        altText={product.altText}
                        productName={product.name}
                        price={product.price} 
                        product={product} 
                    />
                   ))}
                    
                </div>
                <div className="relative">
                    <img className="w-160 h-181 object-cover rounded-2xl" src="public/Home-essential-cover.png" alt="" />
                    <div className="absolute bottom-20 right-25 left-0 text-right ">
                        <h2 className="mb-10 text-4xl text-black font-light">Home Essentials</h2>
                        <a href="" className="text-xs text-[#B21F28]  bg-white flex items-center justify-end mt-2 p-5 w-40 h-12 rounded-4xl ml-95">
                            See All Products
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
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

export default ShopifyCollectionSection; // Export ShopifyCollectionSection as a named export
