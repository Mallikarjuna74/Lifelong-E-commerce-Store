function ProductPageListCard({ name, url }) {
  return (
    <div className="product-page-list-card w-90 h-16 bg-gray-100 flex items-center justify-start pl-10">
      <a href={url} className="text-[16px] font-weight-300 text-[#000000] hover:text-[#b31f29] hover:underline">
        {name}</a>
    </div>
  );
}

export default ProductPageListCard;