import React, { useState } from "react";
import ProductPageListCard from "../components/ui/UI/ProductPageListCard";
import TabProductCard from "../components/ui/UI/TabProductCard";
import { productsList } from "../data/ProductPageData/productlistitems";
import { tabProducts } from "../data/ProductPageData/producttabitems";
function ProductPage() {
    const ProductsList = productsList;
    const TabProducts = tabProducts;

    console.log("ProductPage - TabProducts.length:", TabProducts.length);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // You can adjust this number

    // Calculate total pages
    const totalPages = Math.ceil(TabProducts.length / itemsPerPage);

    // DEBUGGING: Log the calculated total pages
    console.log("ProductPage - totalPages:", totalPages);

    // Get current products to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTabProducts = TabProducts.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Optionally, scroll to top or to the product grid
        // window.scrollTo({ top: document.getElementById('product-grid-section')?.offsetTop || 0, behavior: 'smooth' });
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 mx-1 border rounded ${currentPage === i ? 'bg-[#b31f29] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

  return (
    <>
        <div className="container breadcrumbs-wrap px-3">
            <div className="row">
                 <div className="col-12">
                    {/* {!-- /snippets/breadcrumb.liquid --} */}
                    <nav className="breadcrumb" role="navigation" aria-label="breadcrumbs">
                        <a href="/" title="Back to the home page">Home</a>
                        <span aria-hidden="true">/</span>
                        <span>All Lifelong Products</span>
                    </nav>
                </div>
            </div>
        </div>
        <div className="Tab section">
            <div className="Container px-3 h-30 pt-15">
                 <h2 className="text-2xl text-[#b31f29]">
                    ALL LIFE LONG PRODUCTS
                </h2>
                <p></p>
            </div>
            <div className="Container px-3">
                <div className="flex flex-wrap">
                    <ul id="filter-list" className="h-64 grid grid-rows grid-cols-4 gap-4" role="tablist">
                        {ProductsList.map((product, index) => (
                            <ProductPageListCard
                                key={product.id || product.name || index}
                                name={product.name}
                                url={product.url}
                            />
                        ))}
                    </ul>
                    <br />
                    <div className="tab-content mt-300 block">
                        <div className="tab-pane fade show active flex" id="all" >
                            <div className="row flex">
                                <div className="sidebar w-[375px] flex-shrink-0">
                                    <div className="accordion">
                                        <div>
                                            <div><a href="">Categoris</a></div>
                                            <div>
                                                <ul className="Categories-listing">
                                                    {/* <!-- li> */}
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="Categories-1"/>
                                                            <label className="form-check-label" htmlFor="Categories-1">Lorem Ipsum</label>
                                                        </div>
                                                    {/* </li --> */}
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-leg-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag  Leg Massager"> Leg Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-ab-roller/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Ab Roller">Ab Roller</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-abs-roller/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Abs Roller">Abs Roller</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-air-pump/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Air Pump">Air Pump</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-baby-bath-tub/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Baby Bath Tub">Baby Bath Tub</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-baby-bottle-warmer/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Baby Bottle Warmer">Baby Bottle Warmer</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-baby-car-seat/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Baby Car Seat">Baby Car Seat</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-baby-chair/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Baby Chair">Baby Chair</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-baby-grooming-kit/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Baby Grooming Kit">Baby Grooming Kit</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-baby-potty-seat/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Baby Potty Seat">Baby Potty Seat</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-bag/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Bag">Bag</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-bathmat/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Bathmat">Bathmat</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-bathroom-organiser/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Bathroom Organiser">Bathroom Organiser</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-bathroom-organizer/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Bathroom Organizer">Bathroom Organizer</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-bicycle-helmet/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Bicycle Helmet">Bicycle Helmet</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-biryani-pot/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Biryani Pot">Biryani Pot</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-body-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Body Massager">Body Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-bottle/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Bottle">Bottle</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-breast-pump/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Breast Pump">Breast Pump</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-callus-remover/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Callus Remover">Callus Remover</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-camping-pillow/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Camping Pillow">Camping Pillow</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-camping-tent/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Camping Tent">Camping Tent</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-ceiling-fan/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Ceiling Fan">Ceiling Fan</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-chopper/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Chopper">Chopper</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-combo/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Combo">Combo</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-cookware/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Cookware">Cookware</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-drying-rack/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Drying Rack">Drying Rack</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-drying-stand/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Drying Stand">Drying Stand</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-dumbbell/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Dumbbell">Dumbbell</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-ear-cleaner/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Ear Cleaner">Ear Cleaner</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-electric-kettle/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Electric Kettle">Electric Kettle</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-electric-mop/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Electric Mop">Electric Mop</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-fan/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Fan">Fan</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-foam-roller/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Foam Roller">Foam Roller</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-folding-chair/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Folding Chair">Folding Chair</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-foot-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Foot  Massager">Foot  Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-foot-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Foot Massager">Foot Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-foot-spa/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Foot Spa">Foot Spa</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-fruit-basket/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Fruit Basket">Fruit Basket</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-gas-stove/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Gas Stove">Gas Stove</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-geyser/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Geyser">Geyser</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-gun-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Gun Massager">Gun Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-gym-ball/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Gym Ball">Gym Ball</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-hair-dryer/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Hair Dryer">Hair Dryer</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-hand-grip/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Hand Grip">Hand Grip</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-head-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Head Massager">Head Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-health-faucet/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Health Faucet">Health Faucet</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-helmet-lock/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Helmet Lock">Helmet Lock</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-hob-top/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Hob Top">Hob Top</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-home-safe/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Home Safe">Home Safe</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-hot-water-bag/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Hot Water Bag">Hot Water Bag</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-ice-bath-tub/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Ice Bath Tub">Ice Bath Tub</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-idli-cooker/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Idli Cooker">Idli Cooker</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-induction/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Induction">Induction</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-jade-roller/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Jade Roller">Jade Roller</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-kids-scooter/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Kids Scooter">Kids Scooter</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-kids-tricycle/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Kids Tricycle">Kids Tricycle</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-kitchen-sink-faucets/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Kitchen Sink Faucets">Kitchen Sink Faucets</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-leg-massager/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Leg Massager">Leg Massager</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-lint-remover/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Lint Remover">Lint Remover</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-massage-sticks/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Massage Sticks">Massage Sticks</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-mixer-grinder/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Mixer Grinder">Mixer Grinder</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-mop/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Mop">Mop</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-nutri-blender/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Nutri Blender">Nutri Blender</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-plant-stand/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Plant Stand">Plant Stand</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-power-bank/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Power Bank">Power Bank</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-projector/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Projector">Projector</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-pull-up-bar/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Pull Up Bar">Pull Up Bar</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-push-up-board/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Push Up Board">Push Up Board</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-sandwich-maker/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Sandwich Maker">Sandwich Maker</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-shaker-bottle/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Shaker Bottle">Shaker Bottle</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-shoe-rack/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Shoe Rack">Shoe Rack</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-skate/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Skate">Skate</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-skates/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Skates">Skates</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-spin-bike/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Spin Bike">Spin Bike</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-spin-mop/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Spin Mop">Spin Mop</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-stand/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Stand">Stand</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-stepper/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Stepper">Stepper</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-storage-drawer/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Storage Drawer">Storage Drawer</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-strip-light/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Strip Light">Strip Light</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-stroller/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Stroller">Stroller</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-tooth-brush/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Tooth Brush">Tooth Brush</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-toothbrush/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Toothbrush">Toothbrush</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-towel-rack/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Towel Rack">Towel Rack</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-trampoline/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Trampoline">Trampoline</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-treadmill/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Treadmill">Treadmill</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-trimmer/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Trimmer">Trimmer</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-vacuum-bag/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Vacuum Bag">Vacuum Bag</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-vacuum-cleaner/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Vacuum Cleaner">Vacuum Cleaner</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-wash-basin/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Wash Basin">Wash Basin</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-washing-machine-stand/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Washing Machine Stand">Washing Machine Stand</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-weighing-scale/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Weighing Scale">Weighing Scale</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-wrist-ankle-weights/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Wrist &amp; Ankle Weights">Wrist &amp; Ankle Weights</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-yoga-mat/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Yoga Mat">Yoga Mat</a>
                                                    </li>
                                                
                                            
                                            
                                            
                                                
                                                    <li className="nav-item position-relative">
                                                        <a href="/collections/all/llck-yogurt-curd-maker/#skip-tags-row" className="nav-link ll-grey-text" title="Show products matching tag Yogurt &amp; Curd Maker">Yogurt &amp; Curd Maker</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sorting"></div>
                                </div>
                                <div className="product-grid flex flex-1">

                                    <div id="product-grid-section" className="flex flex-col items-start justify-start w-full">

                                        <div className="grid w-full grid-cols-4 gap-4">
                                            {currentTabProducts.map((item, index) => (
                                            
                                            <TabProductCard
                                                // key={index}
                                                // title={item.title}
                                                // image_url={item.image_url}
                                                // product_url={item.product_url}
                                                // tag={item.tag}
                                                // discount={item.discount}
                                                // price={item.price}
                                                // original_price={item.original_price}
                                                key={itemsPerPage.id || index}
                                                {...item}
                                            />
                                           
                                        ))}
                                        </div>
                                          
                                        {/* Pagination Controls */}
                                        {totalPages > 1 && (
                                            <div className="flex items-center justify-center w-full mt-8 mb-4 border-2 border-red-500 p-2">
                                                <button
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                    className="px-3 py-1 mx-1 border rounded bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Previous
                                                </button>
                                                
                                                {renderPageNumbers()}

                                                <button
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                    className="px-3 py-1 mx-1 border rounded bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    </>
  );
}

export default ProductPage;