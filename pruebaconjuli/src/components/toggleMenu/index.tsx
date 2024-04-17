"use client";
import Link from "next/link";
import { useContext } from "react";
import { ContextoMenu } from "../contexto";

const itemsNavBar = ["Home", "About", "Products", "Contact"];

export const ToggleMenu: React.FC = (): React.ReactElement => {
  const { statusMenu, setStatusMenu } = useContext(ContextoMenu);
  return (
    <div className="bg-slate-500">
      {statusMenu && (
        <ul className="flex flex-col ">
          {itemsNavBar.map((item) => (
            <Link href={`/${item}`} key={item}>
              <li className="py-2 border-b border-slate-300" key={item}>
                {item}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
