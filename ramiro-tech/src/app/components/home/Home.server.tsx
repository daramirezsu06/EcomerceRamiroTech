import Categories from "../categories";
import HomeClient from "./Home.client";
import ProductCards from "../product_cards";
import { getProducts, getCategories } from "@/helpers";

async function HomeServer() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <HomeClient>
      <Categories categories={categories} />
      <ProductCards products={products} />
    </HomeClient>
  );
}

export default HomeServer;
