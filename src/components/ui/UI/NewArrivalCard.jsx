import React from "react";
import PropTypes from "prop-types";

function NewArrivalCard({ title, description, imageUrl, producturl, altText }) {
  return (
    <div className="group relative w-[315px] h-[413px] rounded-2xl overflow-hidden shadow-md">
      {/* Image Container - Slides left to reveal info card */}
      <div className="absolute inset-0 w-full h-full z-20 transition-transform duration-500 ease-in-out transform 
                      translate-x-0 group-hover:-translate-x-full">
        <img className="w-full h-full object-cover" src={imageUrl} alt={altText} />
      </div>

      {/* Info Container - Starts off-screen to the left and slides in */}
      <div className="absolute inset-0 w-full h-full bg-white p-6 md:p-8 flex flex-col justify-center z-30 
                      transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0">
        <div className="flex flex-col justify-start h-full pt-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-black">{title}</h2>
          <p className="text-xs text-gray-600 mb-4 line-clamp-5">{description}</p>
          <a
            href={producturl}
            className="inline-flex items-center justify-center w-auto max-w-[150px] text-xs font-light 
                      text-white bg-[#B21F28] px-4 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 self-start mt-auto"
          >
            Shop Now
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 shrink-0">
              <circle cx="8.5" cy="8.5" r="8" stroke="white"></circle>
              <path d="M11.3536 8.85355C11.5488 8.65829 11.5488 8.34171 11.3536 8.14645L8.17157 4.96447C7.97631 4.7692 
                      7.65973 4.7692 7.46447 4.96447C7.2692 5.15973 7.2692 5.47631 7.46447 5.67157L10.2929 8.5L7.46447 11.3284C7.2692 
                      11.5237 7.2692 11.8403 7.46447 12.0355C7.65973 12.2308 7.97631 12.2308 8.17157 12.0355L11.3536 8.85355ZM5 9H11V8H5V9Z" fill="white"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

NewArrivalCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  producturl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default NewArrivalCard;