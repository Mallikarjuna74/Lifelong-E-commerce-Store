import CategoryItem from "../ui/UI/CatagoryItem";
import { categories } from "../../data/categories";

function ShopifySection() {
  const shopifyCategories = categories.main;
  return (
    <section className="bg-white pt[100px] pb[100px]">
        <div className="mr-50 ml-50">
            <div className="flex justify-between items-center mt-10 mb-10">
                {shopifyCategories.map((category) => (
                  <CategoryItem
                    key={category.id}
                    imageUrl={category.imageUrl}
                    altText={category.altText}
                    title={category.title}
                    categoryUrl={category.url}
                  />
                ))}
            </div>
        </div>
    </section>
  );
}

export default ShopifySection; // Export ShopifySection as a named export