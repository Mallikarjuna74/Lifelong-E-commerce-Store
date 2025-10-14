import PropTypes from 'prop-types';

function GiftCard({ imageUrl,title, description }) {
   return (     
        <div className='min-w-[313px] flex flex-col mb-10'>           
            <div className="relative">
                <img className="w-75 h-80 rounded-2xl" src={imageUrl}/>
                <div className="absolute bottom-5 left-5 right-5 text-white p-2 rounded">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

GiftCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default GiftCard; // Export GiftCard as a named export