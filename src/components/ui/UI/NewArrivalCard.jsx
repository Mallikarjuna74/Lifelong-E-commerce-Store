import React from 'react';
import PropTypes from 'prop-types';

function NewArrivalCard({ title, description, imageUrl, producturl, altText }) {
   return (
    // 1. Main Container: Still needs relative positioning and overflow hidden
    <div className="group relative w-[315px] h-[413px] rounded-2xl overflow-hidden shadow-md">

        {/* 2. Image Container: Positioned relatively, higher z-index. NO LONGER SLIDES. */}
        {/* Removed group-hover:-translate-x-full */}
        <div className="relative w-full h-full z-20 transition-transform duration-500 ease-in-out">
            <img
                className="w-full h-full object-cover" // No individual hover effects needed here
                src={imageUrl}
                alt={altText}
            />
        </div>

        {/* 3. Info Container: Positioned absolutely, lower z-index, slides in from the RIGHT on hover */}
        {/* Keeps its animation: starts translated right, moves to 0 on hover */}
        <div className="absolute inset-0 w-full h-full bg-white p-6 md:p-8 flex flex-col justify-center z-10 transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0">
            {/* Content layout within the info card */}
            <div className="flex flex-col justify-start h-full pt-4"> {/* Adjust padding-top as needed */}
                <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-xs text-gray-600 mb-4 line-clamp-5">{description}</p>
                <a
                    href={producturl} // Using producturl prop
                    className="inline-flex items-center justify-center w-auto max-w-[150px] text-xs font-light text-white bg-[#B21F28] px-4 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 self-start mt-auto" // mt-auto pushes button to bottom
                >
                    Shop Now
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 shrink-0">
                        <circle cx="8.5" cy="8.5" r="8" stroke="white"></circle>
                        <path d="M11.3536 8.85355C11.5488 8.65829 11.5488 8.34171 11.3536 8.14645L8.17157 4.96447C7.97631 4.7692 7.65973 4.7692 7.46447 4.96447C7.2692 5.15973 7.2692 5.47631 7.46447 5.67157L10.2929 8.5L7.46447 11.3284C7.2692 11.5237 7.2692 11.8403 7.46447 12.0355C7.65973 12.2308 7.97631 12.2308 8.17157 12.0355L11.3536 8.85355ZM5 9H11V8H5V9Z" fill="white"></path>
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
    productUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

export default NewArrivalCard; // Export GiftCard as a named export