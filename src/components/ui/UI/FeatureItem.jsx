import React from 'react';
import PropTypes from 'prop-types';

function FeatureItem({ iconUrl, altText, title }) {
  return (
    <div className="w-[20%] flex flex-col items-center text-center p-5"> {/* Added text-center */}
      <img
        className="mb-3 h-10 w-10 object-contain" /* Adjusted size and added object-contain */
        src={iconUrl}
        alt={altText || title} // Use title as fallback alt text
      />
      <h4 className="text-[0.8rem] font-normal text-gray-500"> {/* Adjusted text size/weight */}
        {title}
      </h4>
    </div>
  );
}

FeatureItem.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default FeatureItem;