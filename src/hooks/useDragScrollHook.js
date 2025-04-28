import { useState, useEffect, useRef } from 'react';

export const useDragScroll = () => {
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
    
    return { containerRef, sliderRef };
}