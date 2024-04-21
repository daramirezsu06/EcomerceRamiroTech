"use client";
import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
export const LogoCar: React.FC = (): React.ReactElement => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("car") || "[]");
    let totalunidades = 0;
    const unidades = products.forEach(
      (element: { id: number; cantidad: number }) => {
        totalunidades = totalunidades + element.cantidad;
      }
    );
    setCount(totalunidades);
  }, []);

  return (
    <Link href="/cart">
      <div className="flex items-center gap-2">
        <p>{count}</p>
        <div>
          <RiShoppingCartLine color="#ffffff" />
        </div>
      </div>
    </Link>
  );
};
