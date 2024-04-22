"use client";
import { createContext, useState } from "react";


type MenuContextType = {
  statusMenu: boolean;
  setStatusMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userMenu: boolean;
  setUserMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContextoMenu = createContext<MenuContextType>({
  statusMenu: false,
  setStatusMenu: () => { },
  userMenu: false,
  setUserMenu: () => { },
});

const StatusMenuProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const [statusMenu, setStatusMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  return (
    <ContextoMenu.Provider value={{ statusMenu, setStatusMenu, userMenu, setUserMenu }}>
      {children}
    </ContextoMenu.Provider>
  );
};

export default StatusMenuProvider;
