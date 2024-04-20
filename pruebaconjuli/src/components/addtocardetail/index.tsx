"use client";
import { useState } from "react";
import { RiShoppingCartLine } from "@remixicon/react";

export const ClienteDetail = ({ stock, id }: { stock: number, id: number }) => {
  const [count, setCount] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    const arraycar: { id: number; cantidad: number }[] = JSON.parse(
      localStorage.getItem("car") || "[]"
    );

    const index = arraycar.findIndex((item) => item.id == id);
    if (index !== -1) {
      arraycar[index].cantidad = count;
    } else {
      arraycar.push({ id, cantidad: count });
    }

    localStorage.setItem("car", JSON.stringify(arraycar));
    console.log(arraycar);
  };

  const handleplus = () => {
    setCount(count + 1);
  };

  const handleminus = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex justify-between items-center w-full px-8 py-4 ">
      <div className="flex justify-between items-center gap-4">
        <div className="w-auto  border-2  flex ">
          <button
            className="bg-red-300 rounded-sm block w-4"
            onClick={handleplus}>
            +
          </button>
          <input type="text" value={count} className="text-center block w-8" />
          <button
            className="bg-red-300 rounded-sm block w-4 "
            onClick={handleminus}>
            -
          </button>
        </div>
        <h3 className="text-red-500 text-xl">{`${stock} Unidades Disponibles`}</h3>
      </div>

      <button id={String(id)} className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center" onClick={handleClick}>
        <RiShoppingCartLine color="#ffffff" size={25} />
      </button>
    </div>
  );
};
