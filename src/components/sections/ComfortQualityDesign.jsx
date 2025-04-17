import FeatureItem from "../ui/UI/FeatureItem"
import { features } from "../../data/features"

function ComfortQualitySection() {
    const qualityFeatures = features.comfortQuality;
    return (
        <section className="bg-[#EFBAB21F] mb-20 w-full">
            <div className="w-full flex justify-between items-center box-border">
                <div className="w-[70%] pr-30 pl-12 box-border py-15">
                    <div>
                        <h2 className="text-4xl text-black font-light mb-10">Comfort.Quality.Design.</h2>
                        <p className="text-xs text-gray-600">At Lifelong, we create innovative solutions that seamlessly blend into the modern Indian lifestyle.</p>
                        <p className="text-xs text-gray-600 mb-10">From home essentials to health and wellness, our products combine contemporary design with superior functionality to enhance both your home and your life.</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 bg-white w-full h-40 rounded-2xl mb-10 divide-x-2 divide-gray-200">
                       {qualityFeatures.map((feature) => (
                            <FeatureItem
                                key={feature.id}
                                iconUrl={feature.iconUrl}
                                altText={feature.altText}
                                title={feature.title}
                            />
                        ))}
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">With over 300 products developed in 10 years, we've proudly become a part of 10 million households across India. 
                        Serving over 10,000 pin codes, we continue to bring comfort, convenience, and style to every aspect of your home and lifestyle, making daily living simpler, smarter, and more enjoyable.</p>
                    </div>
                </div>
                <div className="w-[30%] h-full">
                    <img className="w-full h-126 object-cover" src="//www.lifelongindiaonline.com/cdn/shop/files/Mask_group_2.png?v=1728457898" alt="ImagesDrop"/>
                </div>
            </div>
            
        </section>
    )                  

}
export default ComfortQualitySection // Export ComfortQualitySection as a named export

// function ComfortQualitySection() {
//     return (
//         <section className="bg-pink-50 mb-20 w-full">
//             <div className="w-full flex justify-between items-center box-border">
//                 <div className="w-[70%] pr-6 pl-4 box-border">
//                     <div>
//                         <h2>Comfort.Quality.Design.</h2>
//                         <p>At Lifelong, we create innovative solutions that seamlessly blend into the modern Indian lifestyle.</p>
//                         <p>From home essentials to health and wellness, our products combine contemporary design with superior functionality to enhance both your home and your life.</p>
//                     </div>
//                     <div className="flex justify-between items-center mt-4 bg-white">
//                         <div>
//                             <img src="//www.lifelongindiaonline.com/cdn/shop/files/Group_46.svg?v=1727857343" alt="ImagesDrop"/>
//                             <h4>Extended Warranty</h4>
//                         </div>
//                         <div>
//                             <img src="//www.lifelongindiaonline.com/cdn/shop/files/Group_49.svg?v=1727857340" alt="ImagesDrop"/>
//                             <h4>Best Prices</h4>
//                         </div>
//                         <div>
//                             <img src="//www.lifelongindiaonline.com/cdn/shop/files/Group_48.svg?v=1727857362"  alt="ImagesDrop"/>
//                             <h4>Product Innovation</h4>
//                         </div>
//                         <div>
//                             <img src="//www.lifelongindiaonline.com/cdn/shop/files/Group_50.svg?v=1727857362" alt="ImagesDrop"/>
//                             <h4>Home Service</h4>
//                         </div>
//                         <div>
//                             <img src="//www.lifelongindiaonline.com/cdn/shop/files/image_30_1.svg?v=1727857362" alt="ImagesDrop"/>
//                             <h4>4 Star Rated Products</h4>
//                         </div>
//                     </div>
//                     <div>
//                         <p>With over 300 products developed in 10 years, we've proudly become a part of 10 million households across India. 
//                         Serving over 10,000 pin codes, we continue to bring comfort, convenience, and style to every aspect of your home and lifestyle, making daily living simpler, smarter, and more enjoyable.</p>
//                     </div>
//                 </div>
//                 <div className="w-[30%] box-border">
//                     <img className="" src="//www.lifelongindiaonline.com/cdn/shop/files/Mask_group_2.png?v=1728457898" alt="ImagesDrop"/>
//                 </div>
//             </div>
//         </section>
//     )                  
// }
// export default ComfortQualitySection;