import { productsList } from "../data/ProductPageData/productlistitems";
import { tabProducts } from "../data/ProductPageData/producttabitems";
import ProductListingPageLayout from "./ProductListingPageLayout";
function ProductPage() {
return (
    <>
        <ProductListingPageLayout
            pageTitle="ALL LIFE LONG PRODUCTS"
            breadcrumbText="All Lifelong Products"
            productsData={tabProducts}
            categoriesData={productsList}
            // itemsPerPage={8} // This is the default in the layout, can be overridden
        />
    </>
    );
}

export default ProductPage;