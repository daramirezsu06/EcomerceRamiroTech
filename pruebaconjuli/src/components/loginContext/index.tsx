"use client";
import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

const LoginContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const LoginProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token);
    } else {
      // Cookies.remove("token");
    }
  }, [token]);

  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
