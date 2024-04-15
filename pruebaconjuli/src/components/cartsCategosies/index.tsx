import { categoriesToPreLoad } from "../../utils/categorys";
import { CartCategory } from "../cartCategory";
export const CartsCategosies: React.FC = (): React.ReactElement => {
  return (
    <div className="flex   py-10  flex-wrap justify-center gap-4 md:w-3/4 m-auto  ">
      {categoriesToPreLoad.map((category) => (
        <CartCategory key={category.id} {...category} />
      ))}
    </div>
  );
};
