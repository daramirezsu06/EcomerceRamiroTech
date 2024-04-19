import { IProduct } from "@/app/types";

const ItemProductCart: React.FC<IProduct> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
}): React.ReactElement => {
  return (
    <div className="flex justify-center items-center gap-4 border-2 border-red-500 md:w-1/2 m-auto my-4 rounded-md p-2">
      <div className="md:w-1/3 border-2 flex justify-center items-center rounded-md">
        <img src={image} alt={name} className="h-20 rounded-md " />
      </div>

      <div>
        <h1 className="text-xl">{name}</h1>
        <p>{`${description.slice(0, 50)}...`}</p>
        <h3 className="text-red-500 text-xl">{`${price} $`}</h3>
      </div>
    </div>
  );
};

export default ItemProductCart;
