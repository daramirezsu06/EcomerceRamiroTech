"use client";
import { useEffect, useState } from "react";
import { categoriesToPreLoad } from "../../utils/categorys";
import { CartCategory } from "../cartCategory";
import { getCategories } from "@/utils/getCategories";

export const CartsCategosies: React.FC = (): React.ReactElement => {
  const [categories, setCategories] = useState([]);
  const getdata = async () => {
    try {
      const response = await getCategories();
      console.log(response);
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="flex py-10 flex-wrap justify-center gap-4 md:w-3/4 m-auto">
      {categories.map((category) => (
        <CartCategory key={category.id} {...category} />
      ))}
    </div>
  );
};
