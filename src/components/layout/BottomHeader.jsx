import { useState, useRef } from 'react'; // Make sure to import useRef
import { Link } from 'react-router-dom'; // Import Link for navigation


function BottomHeader () {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const closeDropdownTimeoutRef = useRef(null); // To store the timeout ID

    const handleMouseEnter = () => {
        // If there's a pending timeout to close the dropdown, clear it
        if (closeDropdownTimeoutRef.current) {
            clearTimeout(closeDropdownTimeoutRef.current);
            closeDropdownTimeoutRef.current = null;
        }
        setIsProductDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        // Set a timeout to close the dropdown after a short delay
        closeDropdownTimeoutRef.current = setTimeout(() => {
            setIsProductDropdownOpen(false);
        }, 100); // 200 milliseconds delay, adjust as needed
    };

    // Note: Tailwind classes like h-15 and px-23 are unconventional.
    // Standard Tailwind uses a spacing scale (e.g., h-16 for 4rem).
    // If these are custom, ensure they are defined in your Tailwind configuration.

    return (
        <>
        <div className="bg-black w-full h-15 mx-0 px-23 block relative">
            <div className="flex justify-between items-center h-15">
                <div className="w-auto flex items-center h-15">
                    <ul className="text-white flex items-center gap-x-12">
                        {/* Products Dropdown */}
                        <li
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to="/Productpage"
                                className="flex items-center focus:outline-none hover:text-gray-300 cursor-default"
                                aria-haspopup="true"
                                aria-expanded={isProductDropdownOpen}
                            >
                                Products
                                <svg
                                    className={`w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out ${
                                        isProductDropdownOpen ? 'transform rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </Link>
                            {isProductDropdownOpen && (
                                <div className="absolute top-full left-0 mt-5 w-290 h-65 bg-gray-100 text-white rounded-md shadow-lg z-50 py-1">
                                    <ul className="sub-menu">
                                        <div className="mega-menu-details">
                                            <div className="menu-list flex flex-row items-start divide-x-2 divide-gray-200">
                                                <div className="flex flex-row items-center mt-2  w-[50%]">
                                                    <li className="sub-menu-item pl-10">
                                                        <a href="#" className="collection-title text-black text-lg">
                                                            Health & Fitness
                                                        </a>
                                                        <ul className="grandchild-sub-menu text-gray-500">
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/sports-fitness" className="mobile-nav__link">
                                                                    Sports & Fitness
                                                                </a>
                                                            </li>
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/massagers-welness" className="mobile-nav__link">
                                                                    Massagers & Wellness
                                                                </a>
                                                            </li>
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/personal-grooming" className="mobile-nav__link">
                                                                    Personal Grooming
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                      
                                                    <li className="sub-menu-item pl-10 pt-6">
                                                        <a href="#" className="collection-title text-black text-lg">
                                                            Home Essentials
                                                        </a>
                                                        <ul className="grandchild-sub-menu text-gray-500">
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/home-kitchen" className="mobile-nav__link">
                                                                    Home & Kitchen
                                                                </a>
                                                            </li>
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/home-improvement" className="mobile-nav__link">
                                                                    Home Improvement
                                                                </a>
                                                            </li>
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/electronics" className="mobile-nav__link">
                                                                    Electronics
                                                                </a>
                                                            </li>
                                                            <li className="sub-menu-item ">
                                                                <a href="/collections/baby" className="mobile-nav__link">
                                                                    Baby
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </div>

                                                <div className="flex flex-row  justify-evenly items-center w-[50%]" >
                                                    <li className="sub-menu-item  vacuum-cleaner">
                                                        <a href="https://www.lifelongindiaonline.com/products/600w-handheld-stick-vacuum-cleaner" className="collection-title hidden text-black">
                                                            Vacuum Cleaner
                                                        </a>
                                                        <div className="menu-item bg-white w-60 h-40 rounded-2xl text-black flex flex-row items-center mt-7 pl-2 pr-2">
                                                            <div className="product-image w-[60%]">
                                                                <img className='w-[90%]' src="//www.lifelongindiaonline.com/cdn/shop/files/1__1_4867ec2c-645b-4db1-ac22-5000ef2e9361.jpg?v=1731420297" alt="600W Handheld Stick Vacuum Cleaner"/>
                                                            </div>
                                                            <div className="product-content w-[40%] mr-3">
                                                                <h3 className='text-base w-auto h-auto truncate'>
                                                                    600W Handheld Stick Vacuum Cleaner
                                                                </h3>
                                                                <div className="custom-price">
                                                                    <span className="menu-item-price text-xs"><span className='text-red-800'>63%</span> Rs. 2,799.00 (<s>Rs. 7,499.00</s>)</span>
                                                                </div>
                                                                <a href="/products/600w-handheld-stick-vacuum-cleaner"
                                                                    className="inline-flex items-center justify-center w-auto max-w-[170px] text-[8px] font-light text-white bg-[#B21F28] px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 self-start mt-2"
                                                                >
                                                                    Shop Now
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                                    className='ml-2 shrink-0'>
                                                                    <circle cx="7" cy="7" r="6.5" stroke="white"></circle>
                                                                    <path d="M9.41238 7.35355C9.60765 7.15829 9.60765 6.84171 9.41238 6.64645L6.2304 3.46447C6.03514 3.2692 5.71856 3.2692 5.5233 3.46447C5.32803 3.65973 5.32803 3.97631 5.5233 4.17157L8.35172 7L5.5233 9.82843C5.32803 10.0237 5.32803 10.3403 5.5233 10.5355C5.71856 10.7308 6.03514 10.7308 6.2304 10.5355L9.41238 7.35355ZM4.11765 7.5H9.05883V6.5H4.11765V7.5Z" fill="white"></path>
                                                                </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                      
                                                    <li className="sub-menu-item  dumbbells">
                                                        <a href="https://www.lifelongindiaonline.com/products/adjustable-dumbbells-set" className="collection-title hidden text-black">
                                                            Dumbbells
                                                        </a>
                                                        <div className="menu-item bg-white w-60 h-40 rounded-2xl text-black flex flex-row items-center mt-7">
                                                            <div className="product-image w-[60%]">
                                                                <img className='w-[90%] ml-2' src="//www.lifelongindiaonline.com/cdn/shop/files/1_b68354fb-68ef-48c8-a94b-93a55831da06.jpg?v=1731421786" alt="Adjustable Dumbbells Set"/>
                                                            </div>
                                                            <div className="product-content w-[40%] mr-3">
                                                                <h3 className='text-base w-auto h-auto truncate'>
                                                                    Adjustable Dumbbells Set
                                                                </h3>
                                                                <div className="custom-price">
                                                                    <span className="menu-item-price text-xs"><span className='text-red-800'>72%</span> Rs. 6,999.00 (<s>Rs. 24,999.00</s>)</span>
                                                                </div>
                                                                <a href="/products/adjustable-dumbbells-set"
                                                                    className="inline-flex items-center justify-center w-auto max-w-[170px] text-[8px] font-light text-white bg-[#B21F28] px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 self-start mt-2"
                                                                >
                                                                    Shop Now
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                                    className='ml-2 shrink-0'>
                                                                    <circle cx="7" cy="7" r="6.5" stroke="white"></circle>
                                                                    <path d="M9.41238 7.35355C9.60765 7.15829 9.60765 6.84171 9.41238 6.64645L6.2304 3.46447C6.03514 3.2692 5.71856 3.2692 5.5233 3.46447C5.32803 3.65973 5.32803 3.97631 5.5233 4.17157L8.35172 7L5.5233 9.82843C5.32803 10.0237 5.32803 10.3403 5.5233 10.5355C5.71856 10.7308 6.03514 10.7308 6.2304 10.5355L9.41238 7.35355ZM4.11765 7.5H9.05883V6.5H4.11765V7.5Z" fill="white"></path>
                                                                </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/GiftStorePage" className="hover:text-gray-300">
                                Gift Store
                            </Link>
                        </li>
                        <li>
                            <Link to="/BestSellerPage" className="hover:text-gray-300">
                                Best Sellers
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-white w-auto flex items-center gap-x-12">
                    <a className= "flex items-center gap-x-2 hover:text-gray-300" href="/support">
                        <svg className="mt-0.5" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9547 7.59653H13.9146V6.6141C13.9146 3.45829 11.3563 0.899994 8.20049 0.899994C5.04465 0.899994 2.48639 
                            3.45829 2.48639 6.6141V7.59653H2.24581C1.36362 7.59653 0.681948 8.37844 0.681948 9.28069V11.7869C0.659729 12.6614 1.35065
                            13.3883 2.22512 13.4105C2.23203 13.4107 2.2389 13.4108 2.24581 13.4109H3.72946C3.93961 13.401 4.10198 13.2226 4.09208 13.0125C4.09173 
                            13.0049 4.09116 12.9973 4.09035 12.9898V8.07768C4.09035 7.83711 3.95001 7.59649 3.72946 7.59649H3.28837V6.61406C3.28837 3.90119 5.48762
                            1.70194 8.20049 1.70194C10.9134 1.70194 13.1126 3.90119 13.1126 6.61406V7.59649H12.6715C12.451 7.59649 12.3106 7.83707 12.3106 8.07768V12.9898C12.2883
                            13.199 12.4397 13.3867 12.6489 13.4091C12.6564 13.4099 12.664 13.4105 12.6715 13.4108H13.1327L13.0926 13.471C12.7958 13.8653 12.4111 14.1848 11.969 14.4041C11.5269 
                            14.6234 10.5463 14.7341 10.5463 14.7341C10.5463 14.7341 10.5494 14.6444 10.5463 15.1014C10.5431 15.5584 10.5463 15.516 10.5463 15.516C10.5463 15.516 11.7742 15.3764 
                            12.3277 15.1014C12.8811 14.8264 13.3627 14.426 13.7341 13.9321L14.1151 13.3707C14.9772 13.3106 15.5185 12.7692 15.5185 11.9873V9.48109C15.5186 8.61905 14.877 7.59653 
                            13.9547 7.59653ZM3.28837 12.6089H2.24581C1.81408 12.5984 1.47261 12.2399 1.48312 11.8082C1.48332 11.8011 1.48358 11.794 1.48393 11.7868V9.28066C1.48393 8.81953 1.80471 
                            8.39847 2.24581 8.39847H3.28837V12.6089ZM14.7166 11.9874C14.7166 12.5287 14.1953 12.6089 13.9547 12.6089H13.1126V8.39851H13.9547C14.3958 8.39851 14.7166 9.02005 14.7166 
                            9.48117V11.9874Z" fill="white" stroke="white" strokeWidth="0.3"></path>
                        <path d="M10.15 15.3C10.15 15.9351 9.63514 16.45 9.00001 16.45C8.36488 16.45 7.85001 15.9351 7.85001 15.3C7.85001 14.6649 8.36488 14.15 9.00001 14.15C9.63514 14.15 10.15 14.6649 10.15 15.3Z" stroke="#B21F28" strokeWidth="1.3"></path>
                        </svg>
                        Support
                    </a>
                    <a className="flex items-center gap-x-2 hover:text-gray-300" href="/extended-warranty">
                        <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2946 1.50141V0H16.5946V1.50141H18.2407V2.80141H16.5946V4.42938H15.2946V2.80141H13.7932V1.50141H15.2946Z" fill="#B21F28"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.64616 0.0369873H12.2203V1.33699H4.05319L1.65021 3.0053C1.65018 3.00993 1.65015 3.01461 1.65012 3.01934C1.64898 3.23392 1.65582 3.55176 
                            1.68873 3.95177C1.7546 4.75244 1.92456 5.87803 2.34136 7.162C3.14593 9.64048 4.87257 12.7201 8.58048 15.2077C11.593 12.9534 14.1479 10.6619 15.1085 5.89199L16.3829 6.14865C15.2847 11.602 
                            12.2224 14.131 8.99116 16.5225L8.63196 16.7883L8.25512 16.5481C3.9955 13.8332 2.01389 10.3636 1.10488 7.56339C0.651626 6.16713 0.465652 4.94018 0.393105 4.05836C0.356805 3.61714 0.348815 
                            3.26124 0.350142 3.0124C0.350805 2.88795 0.353801 2.79015 0.356767 2.72171C0.35825 2.68748 0.359726 2.66059 0.360901 2.64136L0.362401 2.6183L0.362913 2.61116L0.363098 2.6087C0.363128 2.6083 
                            0.36323 2.60698 1.01126 2.65761L0.36323 2.60698L0.387249 2.29954L3.64616 0.0369873ZM13.0234 4.70819L8.42369 9.30792L5.75842 6.64265L6.67766 5.72341L8.42369 7.46944L12.1042 3.78895L13.0234 4.70819Z" fill="white"></path>
                        </svg>
                        Extended Warranty
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default BottomHeader;


