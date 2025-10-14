function ProductDetailPage() {
    const breadcrumbText = "Calf, Foot & Leg Massager"
return (
    <>
        <div className="container breadcrumbs-wrap px-3">
                <div className="row">
                    <div className="col-12">
                        <nav className="breadcrumb" role="navigation" aria-label="breadcrumbs">
                            <a href="/" title="Back to the home page">Home</a>
                            <span aria-hidden="true">/</span>
                            <span>{breadcrumbText}</span>
                        </nav>
                    </div>
                </div>
         </div>
        <div className="flex justify-content-between align-items-start product-detail-page">
            <div className="block pr-4 pl-4" >
                <div className="product-image-container flex flex-nowrap">
                    <ul className="flex flex-col max-w-[16%]">
                    <li>
                        <img className="imgSrc w-[100%] h-[100%]" src="//www.lifelongindiaonline.com/cdn/shop/files/1_-_2024-10-21T170753.369_db4a70d3-db87-4f6f-a484-25f0e3c582f3.jpg?v=1731420634" alt="Calf, Foot & Leg Massager" onclick="addNewSrc(1)"/>
                    </li>
                    <li>
                        <img className="imgSrc w-[100%] h-[100%]" src="//www.lifelongindiaonline.com/cdn/shop/files/2_-_2024-10-21T170757.005_91919588-aabd-4998-8230-3c8003fd6718.jpg?v=1731420634" alt="Calf, Foot & Leg Massager" onclick="addNewSrc(2)"/>
                    </li>
                    <li>
                        <img className="imgSrc w-[100%] h-[100%]" src="//www.lifelongindiaonline.com/cdn/shop/files/3_-_2024-10-21T170806.091_d42322bd-7f80-4710-a332-ca7c95fbdda5.jpg?v=1731420634" alt="Calf, Foot & Leg Massager" onclick="addNewSrc(3)"/>
                    </li>
                    <li>
                        <img className="imgSrc w-[100%] h-[100%]" src="//www.lifelongindiaonline.com/cdn/shop/files/4_-_2024-10-21T170809.925_f48edacf-d1cc-430e-b5f5-07fb8ae0022f.jpg?v=1731420634" alt="Calf, Foot & Leg Massager" onclick="addNewSrc(4)"/>
                    </li>
                    <li>
                        <img className="imgSrc w-[100%] h-[100%]" src="//www.lifelongindiaonline.com/cdn/shop/files/5_-_2024-10-21T170814.098_446b8ab4-ba46-49b7-a9d3-00d6c7edab03.jpg?v=1731420634" alt="Calf, Foot & Leg Massager" onclick="addNewSrc(5)"/>
                    </li>
                </ul>
                <div className="w-[75%] block pr-4 pl-4">
                    <img className="active img-fluid w-[100%] max-w-[96%]" src="//www.lifelongindiaonline.com/cdn/shop/files/1_-_2024-10-21T170753.369_db4a70d3-db87-4f6f-a484-25f0e3c582f3.jpg?v=1731420634"/>
                </div>
                </div>
            </div>
            <div className="product-details-container block align-items-start pr-4 pl-4">
                <form action="">
                    <h5 className="font-weight-bold text-[#b31f29]">Calf, Foot & Leg Massager</h5>
                    <h5 className="font-weight-bold">₹ 13,999.00</h5>
                    <h5 className="text-[#b31f29]">63% off</h5>
                    <h5>
                    <del className="text-gray-500 font-weight-bold">
                        ₹ 38,000.00
                    </del>
                    </h5>
                    <span className="">
                        Experience pain relief with this massager, offering heat, rolling, kneading, and Shiatsu. 
                        It improves blood circulation with 4 vibration motors for a relaxing massage at home.
                    </span>
                    <div className="flex items-center my-2">
                        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 grow-0 shrink-0 border-t border-b border-l border-gray-300">
                            -
                        </button>
                        <span className="w-20 h-10 flex items-center justify-center text-gray-700 border-t border-b border-l border-r border-gray-300">
                            1
                        </span>
                        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 grow-0 shrink-0 border-t border-b border-r border-gray-300" >
                            +
                        </button>
                    </div>
                    <div>
                        <span>Check Availability</span>
                        <div> 
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter pincode"
                                    className=" border-t border-b border-l border-r border-gray-300 p-2 w-30"
                                />
                                <button className="bg-gray-100 w-30 h-10">Check</button>
                            </div>
                        </div>
                        <span className="expected-dates-container">
                            <p>
                                <small className="light-grey-color d-block expected-dates">Country of Origin:China</small>
                            </p>
                            {/* 
                            <p>
                                <small class="light-grey-color d-block expected-dates">Note: Delivery might be delayed by 7 to 10 days due to lockdown restrictions. We regret the inconvenience.</small>
                            </p>  
                            */}
                        </span>
                        <button className="bg-[#b31f29] text-white w-60 h-10">Add to Cart</button>
                    </div>
                </form>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </>
  );
}

export default ProductDetailPage;

//