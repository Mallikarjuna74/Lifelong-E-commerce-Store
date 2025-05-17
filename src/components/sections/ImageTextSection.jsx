function ImageTextSection () {
    return (
        <section>
            <div className="bg-red-600 m-35 mb-15 mt-15 rounded-2xl p-2">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex justify-between items-center w-[40%] divide-x divide-gray-300">
                        <div className="w-[50%] flex justify-center items-center">
                            <img className="w-35 h-15" src="//www.lifelongindiaonline.com/cdn/shop/files/image_12.png?v=1727845603" alt="ImagesDrop"/>
                        </div>
                        <div className="w-[50%] flex justify-center items-center">
                            <img className="w-35 h-25" src="//www.lifelongindiaonline.com/cdn/shop/files/image_11.png?v=1727845604" alt="ImagesDrop"/>
                        </div>
                    </div>
                    <div className="w-[60%] h-full p-4 pr-20">
                        <div>
                            <p className="text text-white">Since 2015, Lifelong Online has been designing products that enhance modern living with ease and efficiency. Our wide range of home essentials, from kitchen appliances and home improvement tools to electronics and baby products, supports every aspect of your home. 
                                We also offer wellness solutions, including sports & fitness gear, massagers, and grooming tools, designed to help you live a balanced, healthy lifestyle. Lifelong Online seamlessly fits into your everyday routine, offering products that simplify, support, and enrich the way you live.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ImageTextSection // Export ImageTextSection as a named export