function TabProductCard({title,image_url,product_url,tag,discount,price,original_price}) {
  return (
    //  <div className="w-[280px] h-[434px] flex flex-col items-center justify-center p-4 m-2 bg-amber-200 shadow-md rounded-lg">
    //     <div className="">
    //         <div className="relative w-full mb-2">
    //             <a href={product_url} className="grid__image">
    //                 <img src={image_url} alt="Digital Glass Weighing Scale"/>
    //             </a>
    //             <div className="tag-container secondary-size w-fit pl-3 p-2 flex items-center justify-center text-xs absolute top-7 right-0 transform rotate-270 bg-[#b31f29] text-white font-weight-500">
    //                 <p>{tag}</p>
    //             </div>
    //         </div>
    //         <div className="product-info flex flex-col items-start justify-start">
    //             <a href={product_url}>
    //                 <span className="product-ttl secondary-size text-gray-400">
    //                     {title}
    //                 </span>
    //             </a>
    //             <div className="product-price">
    //                 <span className="offer-price-info secondary-size text-[#b31f29] mr-1">
    //                     {discount}
    //                 </span>
    //                 <span className="price secondary-size mr-1">
    //                     <strong>{price}</strong>
    //                 </span>
    //             <span className="actual-price secondary-size font-weight-light">({original_price})</span>
    //             </div>
    //         </div>
    //     </div>
    // </div> 
    <div className="h-[434px] flex flex-col items-center p-4">
        {/* Image container: Needs to be relative for absolute positioning of the tag. */}
        {/* Image itself uses w-full and aspect-square for consistency. */}
        <div className="relative w-[250px] h-[345px]">
            <div className=" w-full mb-3 ">
                <a href={product_url} className="grid__image block"> {/* Added block for better layout */}
                    <img 
                        src={image_url || 'https://via.placeholder.com/250'} // Fallback image
                        alt={title || 'Product Image'} // Use title for alt text, with fallback
                        className="w-full h-[250px] object-cover aspect-square" 
                    />
                </a>
                {/* Tag: Positioned absolute, top-right, rotated upside down. */}
                {/* Conditional rendering for the tag. */}
                {tag && (
                    <div className="absolute top-0 right-0 transform rotate-270 bg-[#b31f29] text-white text-xs font-semibold px-2 py-1">
                        <p>{tag}</p>
                    </div>
                )}
            </div>
            {/* Product Info Section */}
            <div className="product-info w-full flex flex-col items-start text-left">
                <a href={product_url} className="w-full">
                    <span className="product-ttl block text-sm text-gray-500 hover:text-[#b31f29] truncate" title={title}>
                        {title || "Untitled Product"} {/* Fallback for title */}
                    </span>
                </a>
                <div className="product-price mt-1 w-full">
                    {discount && <span className="offer-price-info text-xm text-red-600 mr-1">{discount}</span>}
                    <span className="price text-base text-black mr-1">
                        {price || "N/A"} {/* Fallback for price */}
                    </span>
                    {original_price && <span className="actual-price text-xs text-gray-500 line-through">({original_price})</span>}
                </div>
            </div>
        </div>
    </div>     
  );
}

export default TabProductCard;
