"use client";
import React from "react";
import { useLoginContext } from "../Context";

interface Props {
  children: React.ReactNode;
  id: string;
}

const AddToCar: React.FC<Props> = ({ children, id }): React.ReactElement => {
  const { setTotal } = useLoginContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const arraycar: { id: string; cantidad: number }[] = JSON.parse(
      localStorage.getItem("car") || "[]"
    );

    const index = arraycar.findIndex((item) => item.id === id);

    if (index !== -1) {
      arraycar[index].cantidad += 1;
    } else {
      arraycar.push({ id, cantidad: 1 });
    }

    localStorage.setItem("car", JSON.stringify(arraycar));

    const totalproducts = arraycar.reduce(
      (acc: number, item: { id: string; cantidad: number }) =>
        acc + item.cantidad,
      0
    );

    setTotal(totalproducts);
  };

  return (
    <button
      role="button"
      className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center shadow-lg shadow-indigo-500 hover:bg-lime-500"
      id={id} // id se mantiene como string
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default AddToCar;
