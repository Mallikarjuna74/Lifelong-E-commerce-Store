import React from 'react';
import PropTypes from 'prop-types';

function LinkList({ title, links }) {
  return (
    <div>
      <h5 className="text-lg font-semibold mb-4">{title}</h5> {/* Example styling */}
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}> {/* Use a unique id from data if available */}
            <a
              href={link.url}
              className="text-gray-600 hover:text-gray-900 hover:underline text-sm" // Example styling
              target={link.external ? '_blank' : '_self'} // Handle external links
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      external: PropTypes.bool, // Optional: to indicate if link opens in new tab
    })
  ).isRequired,
};

export default LinkList;

//