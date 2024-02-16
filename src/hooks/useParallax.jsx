import { useState, useEffect, useRef } from 'react';

const useParallax = (speed = 0.05, initialOffset = 0) => {
  const [offset, setOffset] = useState(initialOffset);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const elementTopInView = rect.top < window.innerHeight && rect.top > 0;
      const elementBottomInView = rect.bottom > 0 && rect.bottom < window.innerHeight;

      if (elementTopInView || elementBottomInView) {
        // Calculate new offset based on the element's position relative to the viewport
        const progress = rect.top / window.innerHeight;
        const parallaxOffset = -(progress * (window.innerHeight * speed));
        setOffset(initialOffset + parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, initialOffset]);

  return { offset, elementRef };
}

export default useParallax;
