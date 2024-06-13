import { ICategory, IProduct, IResponseProduct } from "../app/types";
import { productsToPreLoad } from "./arrayProducts";
import { categoriesToPreLoad } from "./categorys";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const getDataProduct = async (
  page: number
): Promise<IResponseProduct> => {
  const response = await fetch(`${URL}/products?page=${page}&limit=5`);
  const data: IResponseProduct = await response.json();
  // const dataReturn: IResponseProduct = data.map((product: IProduct) => ({
  //   ...product,
  //   image:
  //     productsToPreLoad.find((item) => item.name === product.name)?.image ||
  //     product.image,
  // }));
  console.log(data);

  return data;
};

// export const getProductById = async (
//   id: number
// ): Promise<IProduct | undefined> => {
//   const products = await getDataProduct();
//   const product = await products.find((product) => product.id == id);
//   return product;
// };
