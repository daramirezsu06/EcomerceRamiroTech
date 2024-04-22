import { ICategory, IProduct } from "../app/types";
import { productsToPreLoad } from "./arrayProducts";
import { categoriesToPreLoad } from "./categorys";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const getDataProduct = async (): Promise<IProduct[]> => {
  const response = await fetch(`${URL}/products`);
  const data: IProduct[] = await response.json();
  const dataReturn: IProduct[] = data.map((product: IProduct) => ({
    ...product,
    image:
      productsToPreLoad.find((item) => item.name === product.name)?.image ||
      product.image,
  }));
  return dataReturn;
};

export const getProductById = async (
  id: number
): Promise<IProduct | undefined> => {
  const products = await getDataProduct();
  const product = await products.find((product) => product.id == id);
  return product;
};
