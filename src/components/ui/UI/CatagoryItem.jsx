import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ imageUrl, altText, title, categoryUrl = "#" }) {
  return (
    <div> {/* Keep the wrapping div for layout in the parent */}
      <a className="flex flex-wrap flex-col justify-center items-center text-center" href={categoryUrl}> {/* Added text-center */}
        <img
          className="w-20 h-20 mb-2" // Added margin-bottom
          src={imageUrl}
          alt={altText || title} // Use title as fallback alt text
        />
        <div>
          <h4 className="text-sm font-medium"> {/* Adjusted text size/weight */}
            {title}
          </h4>
        </div>
      </a>
    </div>
  );
}

CategoryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string,
    title: PropTypes.string.isRequired,
    categoryUrl: PropTypes.string,
  };

export default CategoryItem; // Export CategoryItem as a named export