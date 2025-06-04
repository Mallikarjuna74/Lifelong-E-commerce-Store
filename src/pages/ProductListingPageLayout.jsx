import { useState } from "react";
import ProductPageListCard from "../components/ui/UI/ProductPageListCard";
import TabProductCard from "../components/ui/UI/TabProductCard";


function ProductListingPageLayout({
    pageTitle,
    breadcrumbText,
    productsData,
    categoriesData,
    itemsPerPage = 8 // Default items per page
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    const totalPages = Math.ceil(productsData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = productsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Optional: Scroll to top
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleCategoriesAccordion = () => {
        setIsCategoriesOpen(!isCategoriesOpen);
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
                        <nav className="breadcrumb" role="navigation" aria-label="breadcrumbs">
                            <a href="/" title="Back to the home page">Home</a>
                            <span aria-hidden="true">/</span>
                            <span>{breadcrumbText}</span>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="Tab section">
                <div className="Container px-3 h-30 pt-15">
                    <h2 className="text-2xl text-[#b31f29]">
                        {pageTitle}
                    </h2>
                    <p></p>
                </div>
                <div className="Container px-3">
                    <div className="flex flex-wrap">
                        {/* This filter list might need to be part of categoriesData or a separate prop if it's different from the accordion categories */}
                        <ul id="filter-list" className="h-64 grid grid-rows grid-cols-4 gap-4" role="tablist">
                            {(categoriesData || []).map((product, index) => ( // Displaying first 8 categories as example
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
                                            <div className=" py-2">
                                                <button
                                                    onClick={toggleCategoriesAccordion}
                                                    className="flex justify-items-start items-center w-full text-left font-semibold"
                                                >
                                                    <span className="text-[#b31f29] text-2xl mr-30 font-semibold">Categories</span>
                                                    <span className="text-[#b31f29] text-2xl font-semibold">{isCategoriesOpen ? '-' : '+'}</span>
                                                </button>
                                                {isCategoriesOpen && (
                                                    <div className="pt-2">
                                                        <ul className="Categories-listing">
                                                            {/* Example checkbox, can be removed or made dynamic */}
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" id="Categories-1-generic"/>
                                                                <label className="form-check-label" htmlFor="Categories-1-generic">Lorem Ipsum</label>
                                                            </div>
                                                            {(categoriesData || []).map((product, index) => (
                                                                <ProductPageListCard
                                                                    key={product.id || product.name || index}
                                                                    name={product.name}
                                                                    url={product.url}
                                                                    className="flex flex-start text-sm leading-10"
                                                                />
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="sorting">
                                            <p>Sorting by :</p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="product-grid flex flex-1">
                                        <div id="product-grid-section" className="flex flex-col items-start justify-start w-full">
                                            <div className="grid w-full grid-cols-4 gap-4">
                                                {currentProducts.map((item, index) => (
                                                    <TabProductCard
                                                        key={item.id || index}
                                                        {...item}
                                                    />
                                                ))}
                                            </div>
                                            {totalPages > 1 && (
                                                <div className="flex items-center justify-center w-full mt-8 mb-4 p-2"> {/* Removed debug border */}
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

export default ProductListingPageLayout;