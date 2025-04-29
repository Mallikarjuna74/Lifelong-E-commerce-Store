import { useState, useEffect, useRef, useCallback } from 'react';

export function useDragScroll() {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0); // Renamed for clarity

    const handleMouseDown = useCallback((e) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        // Use clientX for consistency across browsers, pageX can be less reliable
        setStartX(e.clientX - containerRef.current.offsetLeft);
        setScrollLeftStart(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing'; // Change cursor on drag
        containerRef.current.style.userSelect = 'none'; // Prevent text selection
    }, []);

    const handleMouseLeaveOrUp = useCallback(() => {
        if (!isDragging) return; // Only act if dragging
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab'; // Restore cursor
            containerRef.current.style.userSelect = ''; // Restore text selection
        }
    }, [isDragging]); // Depend on isDragging

    const handleMouseMove = useCallback((e) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.clientX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        containerRef.current.scrollLeft = scrollLeftStart - walk;
    }, [isDragging, startX, scrollLeftStart]); // Depend on dragging state and positions

    const updateSlider = useCallback(() => {
        if (!containerRef.current || !sliderRef.current) return;
        const container = containerRef.current;
        const slider = sliderRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        // Prevent division by zero if scrollWidth equals clientWidth
        const scrollPercentage = maxScrollLeft > 0 ? (container.scrollLeft / maxScrollLeft) * 100 : 0;
        // Ensure percentage doesn't go below 0 or above 100 due to potential bounce effects
        slider.style.width = `${Math.max(0, Math.min(100, scrollPercentage))}%`;
    }, []); // No dependencies needed if refs don't change

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initial setup
        container.style.cursor = 'grab';
        updateSlider(); // Set initial slider width

        // Add passive: false for mousemove if preventDefault is needed
        container.addEventListener('mousedown', handleMouseDown);
        // Add listeners to window to catch mouseup/mouseleave even if cursor leaves the container
        window.addEventListener('mouseup', handleMouseLeaveOrUp);
        window.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('scroll', updateSlider, { passive: true }); // scroll can be passive

        // Cleanup function
        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseLeaveOrUp);
            window.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('scroll', updateSlider);
            // Reset styles if needed
            if (container) {
               container.style.cursor = '';
               container.style.userSelect = '';
            }
        };
        // Rerun effect only if handlers change (which they shouldn't often with useCallback)
    }, [handleMouseDown, handleMouseLeaveOrUp, handleMouseMove, updateSlider]);

    // Return the refs to be attached to the elements
    return { containerRef, sliderRef };
}
