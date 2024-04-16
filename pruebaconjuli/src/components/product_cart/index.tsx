import { IProduct } from "@/app/types";
import { RiShoppingCartLine } from "@remixicon/react";
export const ProductCart: React.FC<IProduct> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}): React.ReactElement => {
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
