import { ICategory } from "@/app/types";
export const CartCategory: React.FC<ICategory> = ({
  name,
  image,
}): React.ReactElement => {
  return (
    <div className="flex  flex-col  p-1 rounded-lg w-28 hover:scale-125 duration-300 ">
      <div className="p-2 border-2 rounded-lg flex-col">
        <img src={image} alt={name} className="h-12 rounded-md mx-auto " />
      </div>
      <h1 className="text-sm text-center">{name}</h1>
    </div>
  );
};
