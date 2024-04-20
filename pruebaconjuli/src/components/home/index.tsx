import { CartsCategosies } from "../cartsCategosies";
import { RenderProducts } from "../cartsProducts";
import { PubliDivisor } from "../publi_divisor";
import { PublicOferTop } from "../public_ofer_top";

const Home = () => {
  return (
    <>
      <CartsCategosies />

      <div className="bg-slate-100">
        <PubliDivisor />
        <PublicOferTop />
        <RenderProducts />
      </div>
    </>
  );
};
export default Home;
