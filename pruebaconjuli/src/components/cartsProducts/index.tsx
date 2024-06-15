"use client";
import { ProductCart } from "@/components/product_cart";
import { getDataProduct } from "@/utils/getData";
import { useEffect, useState } from "react";
import { IProduct } from "@/app/types";

const URL = process.env.API_URL;

export const RenderProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]); // Tipar correctamente el estado products
  const [total, setTotal] = useState<number>(0); // Tipar correctamente el estado total
  const [currentPage, setCurrentPage] = useState<number>(1); // Estado para controlar la página actual de productos

  const getData = async (page: number) => {
    try {
      const response = await getDataProduct(page);
      console.log(response);
      setProducts(response.products);
      setTotal(response.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(currentPage); // Llamar getData cuando cambia currentPage
  }, [currentPage]); // Agregar currentPage como dependencia

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const page = Number(e.currentTarget.value);
    setCurrentPage(page); // Actualizar currentPage al hacer clic en el botón de paginación
  };

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
            value={index + 1}
            disabled={index + 1 === currentPage} // Deshabilitar el botón de la página actual
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
