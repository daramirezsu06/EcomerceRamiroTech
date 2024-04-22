"use client";
import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  total: number | undefined;
  setTotal: (total: number | undefined) => void; // Corrección aquí
}

const LoginContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => { },
  total: 0,
  setTotal: () => { }
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const LoginProvider = ({ children }: AuthProviderProps) => {
  const [total, setTotal] = useState<number | undefined>(0);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
    }

    const arraycar: { id: number; cantidad: number }[] = JSON.parse(
      localStorage.getItem("car") || "[]"
    );

    const totalproducts = arraycar.reduce(
      (acc: number, item: { id: number; cantidad: number }) => {
        return acc + item.cantidad;
      },
      0
    );

    setTotal(totalproducts);
  }, []);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, {
        secure: true,
        sameSite: "strict",
      });
    } else {
      Cookies.remove("token");
    }
  }, [token]);

  return (
    <LoginContext.Provider value={{ token, setToken, total, setTotal }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
