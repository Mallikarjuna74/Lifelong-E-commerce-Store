import ProductListingPageLayout from "./ProductListingPageLayout";
import { tabProducts } from "../data/ProductPageData/producttabitems";
import { productsList } from "../data/ProductPageData/productlistitems";

function GiftStorePage() {
  return (
    <ProductListingPageLayout
      pageTitle="ALL LIFE LONG PRODUCTS"
      breadcrumbText="Gift Store"
      productsData={tabProducts}
      categoriesData={productsList}
      // itemsPerPage={8} // This is the default in the layout, can be overridden
    />
  );
}
export default GiftStorePage;