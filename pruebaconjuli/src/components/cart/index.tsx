"use client";
import { getDataProduct, getProductById } from "@/utils/getData";
import { ProductCart } from "../product_cart";
import { json } from "stream/consumers";
import { useEffect, useState } from "react";
import { IProduct } from "@/app/types";
import ItemProductCart from "../itemProductCart";

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const arrayProducts = JSON.parse(localStorage.getItem("car") || "[]");
    const products = arrayProducts.map(async (id: number) => {
      const product = await getProductById(id);
      return product;
    });
    Promise.all(products).then((products) => setProducts(products));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ItemProductCart key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Cart;
