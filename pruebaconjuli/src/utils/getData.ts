import { ICategory, IProduct } from "../app/types";
import { productsToPreLoad } from "./arrayProducts";
import { categoriesToPreLoad } from "./categorys";

export const getDataProduct = async (url: string): Promise<IProduct[]> => {
  const response = await fetch(url);
  const data: IProduct[] = await response.json();
  const dataReturn: IProduct[] = data.map((product: IProduct) => ({
    ...product,
    image:
      productsToPreLoad.find((item) => item.name === product.name)?.image ||
      product.image,
  }));
  return dataReturn;
};
