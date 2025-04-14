"use client";

import React, { useState, useEffect } from 'react';
import { useColorContext } from '../context/ColorContext';

const AnimatedBar = () => {
  // State to track scroll progress (0 to 100)
  const [scrollProgress, setScrollProgress] = useState(0);
  // Use color context to get dynamic colors
  const { currentColors } = useColorContext();
  
  // Function to calculate scroll progress
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(Math.min(Math.max(0, scrollPercent), 100)); // Ensure value is between 0-100
  };

  useEffect(() => {
    
      // Add scroll event listener
      window.addEventListener('scroll', calculateScrollProgress);
      calculateScrollProgress();
      
      return () => window.removeEventListener('scroll', calculateScrollProgress);
    
  }, []);

  return (
    <div className="relative w-full h-[1px]">
      {/* Base line that's always visible */}
      <div 
        className="absolute top-0 left-0 h-[1px] w-full" 
        style={{ 
                backgroundColor: `${currentColors.barColor.replace('0.5', '0.3')}` /* Always visible base line */
        }}
      ></div>
      
      {/* Animated line that grows with scroll */}
      <div 
        className="absolute top-0 left-0 h-[1px] transition-all duration-300 ease-out" 
        style={{ 
                width: `${Math.max(0, scrollProgress || 0)}%`,
                backgroundColor: currentColors.barColor /* Dynamic color from context */
        }}
      ></div>
    </div>
  );
};

export default AnimatedBar;
