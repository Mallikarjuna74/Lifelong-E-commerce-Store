import React from 'react';
import PropTypes from 'prop-types'; // Optional: for prop type validation

function HomeProductCard ({ imageUrl, altText, productName, price }) {
  return (
    <div className="relative max-w-sm w-76 h-96 rounded-2xl overflow-hidden shadow-lg bg-white shrink-0 mb-10" style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <img 
            className='w-full h-full object-cover' 
            src= {imageUrl} 
            alt={altText || productName}
          />
      </div>
      <div>
        <div className='flex-grow p-4 flex flex-col justify-between'>
          <h6 className='text-gray-700 text-xs' title={productName}>{productName}</h6>
          <p alt='product price' price={price}>{price}</p>
        </div>
      </div>
    </div>
  )
}

HomeProductCard.propTypes = {   
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};


export default HomeProductCard; // Export HomeProductCard as a named export






