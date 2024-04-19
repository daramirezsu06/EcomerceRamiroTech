import { CartsCategosies } from "@/components/cartsCategosies";
import { PubliDivisor } from "@/components/publi_divisor";
import { PublicOferTop } from "@/components/public_ofer_top";
import { HeaderCurrent } from "@/components/headerCurrent";
import { RenderProducts } from "@/components/cartsProducts";

import Footer from "@/components/footer";

export default function Home(): JSX.Element {
  return (
    <>
      <HeaderCurrent />
      <CartsCategosies />

      <div className="bg-slate-100">
        <PubliDivisor />
        <PublicOferTop />
        <RenderProducts />
      </div>
      <Footer />
    </>
  );
}
