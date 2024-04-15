import { productsToPreLoad } from "@/utils/arrayProducts"
import { ProductCart } from "@/components/product_cart";
export const Home1: React.FC = (): React.ReactElement => {

    return (
      <div className="flex flex-wrap justify-center gap-4 md:w-3/4 m-auto py-4 ">
        {productsToPreLoad.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
    );
}