import React from 'react';
import PropTypes from 'prop-types';

function GiftCard({ title, description, imageUrl }) {
   return (
        <div className='min-w-[250px] flex table-columns mb-10'>
            <a href="">
                <div className="relative">
                    <img className="w-75 h-75 rounded-2xl" src={imageUrl} alt=""/>
                    <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                        <h2 title={title}>{title}</h2>
                        <p title={description}>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

GiftCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default GiftCard; // Export GiftCard as a named export