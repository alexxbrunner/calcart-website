import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and set a boolean state.
 * @param {number} threshold - The scroll position (in pixels) above which the state becomes true.
 * @returns {boolean} - True if the window has scrolled past the threshold, false otherwise.
 */
export const useScrollEffect = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

