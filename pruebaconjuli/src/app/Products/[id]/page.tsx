import { getDataProduct } from "@/utils/getData";
import { RiShoppingCartLine } from "@remixicon/react";
import { IProduct } from "../../types";
import { HeaderCurrent } from "@/components/headerCurrent";
import Footer from "@/components/footer";
import { ClienteDetail } from "@/components/addtocardetail";
import Link from "next/link";

const productById = async ({ params }: { params: { id: string } }) => {
  const dataProducts = await getDataProduct("http://localhost:3000/products");
  const productbyid = dataProducts.find(
    (product: IProduct) => String(product.id) === params.id
  );
  if (!productbyid) {
    return (
      <>
        <main className="flex items-center justify-center bg-background_light min-h-screen sm:py-32 lg:px-8 h-full">
          <div className="text-center">
            <p className="text-3xl font-semibold text-error">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-primary">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/Home"
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-background_light shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Go back home
              </Link>
              <a href="#" className="text-sm font-semibold text-primary">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }

  const { id, name, description, price, stock, image, categoryId } =
    productbyid;

  return (
    <>
      <div
        key={id}
        id={String(id)}
        className="border-2 flex flex-col justify-between items-center h-auto  py-2 bg-slate-100
        md:w-3/4 md:flex-row  md:m-auto md:gap-8 md:px-8 md:bg-inherit">
        <div className=" bg-white w-full ">
          <img
            src={image}
            alt={name}
            className="h-80 mx-auto md:p-0 rounded-lg  p-2 "
          />
        </div>

        <div className="flex flex-col items-center  justify-around px-8 gap-8 my-2 bg-white">
          <h1 className="text-2xl">{name}</h1>
          <h3 className="text-red-500 text-3xl">{`${price} $`}</h3>
          <p>{description}</p>
          <ClienteDetail stock={stock} id={id} />
        </div>
      </div>
    </>
  );
};

export default productById;
