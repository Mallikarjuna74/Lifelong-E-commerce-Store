import React,  { useRef, useState, useEffect } from 'react';
function GiftSection() {
    const containerRef = useRef(null);
    const sliderRef = useRef(null); // Create a ref for the slider element
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const slider = sliderRef.current; // Get the slider element

        if (!container || !slider) return; // Ensure the container and slider are available


        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - container.offsetLeft);
            setScrollLeft(container.scrollLeft);
        };

        const handleMouseLeave = () => {
            setIsDragging(false);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // The multiplier controls the scroll speed
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);

        const handleSroll = () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const scrollPercentage = (container.scrollLeft / maxScrollLeft) * 100;
            slider.style.width = `${scrollPercentage}%`; // Update the slider width based on scroll position
        };
        
        container.addEventListener('scroll', handleSroll); // Add scroll event listener to the container

        return () => {
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mouseleave', handleMouseLeave);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mousemove', handleMouseMove);
            container.removeEventListener('scroll', handleSroll); // Clean up the scroll event listener
        };
    }, [isDragging, startX, scrollLeft]); // Add dependencies to the useEffect

  return (
    <section className="relative">
      <div className="pt-[84px] pb-[80px] mr-15 ml-15">
        <div className="mb-[40px]">
            <h2 className="text-[36px] font-weight-300">Find the Perfect Gift</h2>
        </div>
        <div ref={containerRef}
          className="flex flex-nowrap gap-[20px] overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ cursor: 'grab' }}>
            <div className='min-w-[250px]'>
                        <a href="">
                            <div className="relative">
                                <img className="w-75 h-75 rounded-2xl" src="public/For_Kids.png" alt=""/>
                                <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                                    <h2>For Kids</h2>
                                    <p>Starting At Rs. 199</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='min-w-[250px]'>
                        <a href="">
                            <div className="relative">
                            <img className="w-75 h-75 rounded-2xl" src="For_Home_Kitchen.png" alt=""/>
                                <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                                    <h2>For Home & Kitchen</h2>
                                    <p>Starting At Rs. 1,499</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='min-w-[250px]'>
                        <a href="">
                            <div className="relative">
                            <img className="w-75 h-75 rounded-2xl" src="public/For_Fitness_Enthusiasts.png" alt=""/>
                                <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                                    <h2>For Fitness Enthusiasts</h2>
                                    <p>Starting At Rs. 499</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='min-w-[250px]'>
                        <a href="">
                            <div className="relative">
                            <img className="w-75 h-75 rounded-2xl" src="public/For_Wellness_Relaxation_Large.png" alt=""/>
                                <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                                    <h2>Wellness &amp; Relaxation</h2>
                                    <p>Starting At Rs. 199</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='min-w-[250px]'>
                        <a href="">
                            <div className="relative">
                            <img className="w-75 h-75 rounded-2xl" src="public/For_Gadget_Enthusiasts.png" alt=""/>
                                <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                                    <h2>For Gadget Enthusiasts</h2>
                                    <p>Starting At Rs. 999</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='min-w-[250px]'>
                        <a href="">
                            <div className="relative">
                            <img className="w-75 h-75 rounded-2xl" src="public/For_baby.png" alt=""/>
                                <div className="absolute bottom-5 left-5 right-5 text-white bg-opacity-50 p-2 rounded">
                                    <h2>For Baby</h2>
                                    <p>Starting at Rs. 899</p>
                                </div>
                            </div>
                        </a>
                    </div>
        </div>
        <div className="slider-track-container mt-4">
          <div ref={sliderRef} className="slider-track bg-amber-300"></div>
        </div>
        
      </div>
    </section>
  );
}

export default GiftSection; // Export GiftSection as a named export


