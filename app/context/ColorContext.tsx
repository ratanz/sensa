"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

// Define color schemes for different sections
export type SectionColors = {
  textColor: string;
  iconColor: string;
  barColor: string;
};

// Default to white for dark backgrounds
const defaultColors: SectionColors = {
  textColor: 'rgb(255, 255, 255)',
  iconColor: 'rgb(255, 255, 255)',
  barColor: 'rgba(255, 255, 255, 0.5)'
};

// Color map for different backgrounds
export const colorSchemes: Record<string, SectionColors> = {
  darkBlue: {
    textColor: 'rgb(255, 255, 255)',
    iconColor: 'rgb(255, 255, 255)',
    barColor: 'rgba(255, 255, 255, 0.5)'
  },
  yellow: {
    textColor: 'rgb(25, 118, 71)', // Dark green for yellow background (like in Briteside)
    iconColor: 'rgb(25, 118, 71)',
    barColor: 'rgba(25, 118, 71, 0.5)'
  },
  pink: {
    textColor: 'rgb(94, 23, 58)', // Deep purple-red for pink background (like in Klarna)
    iconColor: 'rgb(94, 23, 58)',
    barColor: 'rgba(94, 23, 58, 0.5)'
  },
  lightPurple: {
    textColor: 'rgb(96, 57, 200)', // Purple for Cabify's light purple background
    iconColor: 'rgb(96, 57, 200)',
    barColor: 'rgba(96, 57, 200, 0.5)'
  },
  navyBlue: {
    textColor: 'rgb(223, 208, 187)', // Beige/cream for JME's navy blue background
    iconColor: 'rgb(223, 208, 187)',
    barColor: 'rgba(223, 208, 187, 0.5)'
  }
};

// Create context
type ColorContextType = {
  currentColors: SectionColors;
  setCurrentSection: (section: string) => void;
  isFooterVisible: boolean;
};

const ColorContext = createContext<ColorContextType>({
  currentColors: defaultColors,
  setCurrentSection: () => {},
  isFooterVisible: false,
});

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentColors, setCurrentColors] = useState<SectionColors>(defaultColors);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const setCurrentSection = (section: string) => {
    setCurrentColors(colorSchemes[section] || defaultColors);
  };

  // Track scroll position and determine which section is visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section-color]');
      const footer = document.getElementById('footer-section');
      
      // Find section at the start of the viewport
      const viewportStart = window.scrollY + window.innerHeight;
      
      let activeSection = 'darkBlue'; // Default
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (viewportStart >= sectionTop && viewportStart <= sectionBottom) {
          activeSection = section.getAttribute('data-section-color') || 'darkBlue';
        }
      });
      
      setCurrentSection(activeSection);
      
      // Check if footer is visible
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsFooterVisible(rect.top <= window.innerHeight && rect.bottom >= window.innerHeight - 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ColorContext.Provider value={{ currentColors, setCurrentSection, isFooterVisible }}>
      {children}
    </ColorContext.Provider>
  );
};
