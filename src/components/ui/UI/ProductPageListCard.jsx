function ProductPageListCard({ name, url, className}) {
    // Base classes that always apply for structure and some default appearance
  const baseClasses = "product-page-list-card w-90 flex items-center justify-start";
  
  // Default styling classes that apply if no specific 'className' prop is passed
  // These are the visual styles like height, background, padding.
  const defaultStyling = "h-16 bg-gray-100 pl-10";
  return (
    <div className={`${baseClasses} ${className || defaultStyling}`}>
      <a href={url} className="text-[16px] font-weight-300 text-[#000000] hover:text-[#b31f29] hover:underline">
        {name}
      </a>
    </div>
  );
}

export default ProductPageListCard;