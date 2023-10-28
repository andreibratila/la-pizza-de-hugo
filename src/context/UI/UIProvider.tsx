"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
  isOpen: boolean;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu: () => void;
}

// Crea el contexto
const UIContext = createContext({} as ContextProps);

// Crea un provider personalizado
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UIContext.Provider value={{ isOpen, handleMenu }}>
      {children}
    </UIContext.Provider>
  );
};

// Crea un hook personalizado para usar el contexto
export const useNavbar = () => useContext(UIContext);
