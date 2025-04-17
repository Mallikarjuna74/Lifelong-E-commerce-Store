import React from 'react';
import PropTypes from 'prop-types'; // Optional: for prop type validation

function ProductCard({ imageUrl, altText, productName, price, productUrl = "#" }) {
  return (
    <div className="w-80 h-89 rounded-2xl bg-white flex flex-col justify-items-start items-right pl-10 pt-10">
      <div className="block">
        <a href={productUrl}>
          <img
            className="w-60 h-60 object-cover rounded-2xl" // Added object-cover based on original usage
            src={imageUrl}
            alt={altText || productName} // Use productName as fallback alt text
          />
        </a>
      </div>
      <div className="block mt-5">
        <a href={productUrl}>
          <h6 className="text-xs text-gray-500 truncate" title={productName}> {/* Added truncate and title for long names */}
            {productName}
          </h6>
        </a>
        <p className="text-sm font-medium"> {/* Slightly adjusted styling for price */}
          {price}
        </p>
      </div>
    </div>
  );
}

// Optional: Prop type validation
ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  productUrl: PropTypes.string,
};

export default ProductCard;
