import React from 'react'
import NewArrivalCard from "../ui/UI/NewArrivalCard";
import { newArrivals } from "../../data/newarrivaldata"; // Import the product data from the data file

function NewArrival () {
    const NewArrivalProduct = newArrivals; // Import the product data from the data file
    return (
        <section className="pt-[80px] pb-[80px] bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-[40px] text-center md:text-left">
                    <h2 className="text-3xl md:text-[36px] font-light">New Arrivals</h2>
                </div>
                <div>
                    <div className="flex flex-wrap gap-5 justify-center space-x-4">
                        {NewArrivalProduct.map((product) => (
                            <NewArrivalCard
                                key={product.id}
                                imageUrl={product.imageUrl}
                                altText={product.altText}
                                title={product.title}
                                description={product.description}
                                producturl={product.producturl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewArrival // Export NewArrival as a named export