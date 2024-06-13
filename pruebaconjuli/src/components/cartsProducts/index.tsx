"use client";
import { productsToPreLoad } from "@/utils/arrayProducts";
import { ProductCart } from "@/components/product_cart";
import { getDataProduct } from "@/utils/getData";
import { useEffect, useState } from "react";

const URL = process.env.API_URL;

export const RenderProducts: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const getData = async (page: number) => {
    try {
      const response = await getDataProduct(page);
      console.log(response);
      setProducts(response.products);
      setTotal(response.total);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(1);
  }, []);
  // const dataProducts = await getDataProduct(1);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const page = Number(e.currentTarget.value);
    getData(page);
  };

  // ... Otras partes del código permanecen iguales ...

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 md:w-3/4 m-auto py-4 ">
        {products.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center gap-4 mb-2">
        {Array.from({ length: Math.ceil(total / 5) }, (_, index) => (
          <button
            key={index}
            onClick={handleClick}
            className="border border-slate-500 block h-8 w-8"
            value={index + 1}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
