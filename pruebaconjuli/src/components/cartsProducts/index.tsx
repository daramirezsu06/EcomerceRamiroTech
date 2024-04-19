import { productsToPreLoad } from "@/utils/arrayProducts";
import { ProductCart } from "@/components/product_cart";
import { getDataProduct } from "@/utils/getData";

const URL = process.env.API_URL;

export const RenderProducts: React.FC =
  async (): Promise<React.ReactElement> => {
    const dataProducts = await getDataProduct(`${URL}/products`);

    return (
      <div className="flex flex-wrap justify-center gap-4 md:w-3/4 m-auto py-4 ">
        {dataProducts.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
    );
  };
