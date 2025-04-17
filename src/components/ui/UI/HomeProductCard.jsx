import React from 'react';
import PropTypes from 'prop-types'; // Optional: for prop type validation

function HomeProductCard ({ imageUrl, altText, productName, price, productUrl = "#" }) {
    return (
        <div className="relative max-w-sm w-80 h-98 rounded-2xl overflow-hidden shadow-lg bg-white">
              <div>
                <a className='w-full' href="/products/calf-foot-leg-massager">
                  <img 
                        className='w-full h-full object-cover' 
                        src= {imageUrl} 
                        alt={altText}
                    />
                </a>
              </div>
              <div>
                <div className='p-4'>
                  <a href={productUrl}>
                    <h6 className='text-gray-700 text-xs' title={productName}>{productName}</h6>
                  </a>
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
    productUrl: PropTypes.string,
};


export default HomeProductCard; // Export HomeProductCard as a named export



