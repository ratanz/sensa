import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavbarContextType {
  textColor: string;
  setTextColor: (color: string) => void;
}

const defaultValue: NavbarContextType = {
  textColor: 'text-zinc-200', // Default text color
  setTextColor: () => {},
};

const NavbarContext = createContext<NavbarContextType>(defaultValue);

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [textColor, setTextColor] = useState<string>(defaultValue.textColor);

  return (
    <NavbarContext.Provider value={{ textColor, setTextColor }}>
      {children}
    </NavbarContext.Provider>
  );
};
