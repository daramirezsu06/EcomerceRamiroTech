"use client";
import React from "react";
export const BotonBorrar: React.FC = (): React.ReactElement => {
  const handleClick = () => {
    localStorage.removeItem("car");
    console.log(localStorage.getItem("car"));
  };

  return (
    <button
      className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
      onClick={handleClick}>
      eliminar carro
    </button>
  );
};
