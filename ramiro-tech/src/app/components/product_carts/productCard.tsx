"use client";

import { ProductCardsContainer } from "./ProductCards.styles";
import ProductCard from "../product_card";
import { IProduct } from "@/app/types";

function ProductCards({ products }: { products: IProduct[] }) {
  return (
    <ProductCardsContainer className="product-cards">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductCardsContainer>
  );
}

export default ProductCards;
