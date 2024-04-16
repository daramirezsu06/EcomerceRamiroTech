import { getDataProduct } from "@/utils/getData";
import { RiShoppingCartLine } from "@remixicon/react";
import { IProduct } from "../types";

const productById = async ({ params }: { params: { profile: string } }) => {
  const dataProducts = await getDataProduct("http://localhost:3000/products");
  const productbyid = dataProducts.find(
    (product: IProduct) => String(product.id) === params.profile
  );
if (!productbyid) {
  return <div>No se encontró el producto</div>; // O manejar el caso de producto no encontrado de otra manera
}

const { id, name, description, price, stock, image, categoryId } = productbyid;
 

  return (
    <div
      key={id}
      id={String(id)}
      className="w-64 border-2 border-red-500 flex flex-col content-between items-center p-2 rounded-md hover:scale-105 duration-300">
      <img src={image} alt={name} className="h-48 rounded-md" />
      <h1 className="text-xl">{name}</h1>
      <p>{`${description.slice(0, 50)}...`}</p>
      <div className="flex justify-between items-center w-full px-8">
        <h3 className="text-red-500 text-xl">{`${price} $`}</h3>
        <div className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center">
          <RiShoppingCartLine color="#ffffff" size={25} />
        </div>
      </div>
    </div>
  );
};

export default productById;
