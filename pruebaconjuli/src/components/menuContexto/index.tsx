"use client";
import { createContext, useState } from "react";


type MenuContextType = {
  statusMenu: boolean;
  setStatusMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContextoMenu = createContext<MenuContextType>({
  statusMenu: false,
  setStatusMenu: () => {},
});

const StatusMenuProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const [statusMenu, setStatusMenu] = useState(false);
  return (
    <ContextoMenu.Provider value={{ statusMenu, setStatusMenu }}>
      {children}
    </ContextoMenu.Provider>
  );
};

export default StatusMenuProvider;
