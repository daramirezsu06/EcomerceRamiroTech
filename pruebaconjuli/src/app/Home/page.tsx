import { Header1 } from "@/components/header";
import { Home1 } from "@/components/cartsProducts";
import { CartsCategosies } from "@/components/cartsCategosies";
import { PubliDivisor } from "@/components/publi_divisor";
import { PublicOferTop } from "@/components/public_ofer_top";

export default function Home() {
  return (
    <>
      <Header1 />
      <CartsCategosies />

      <div className="bg-slate-100">
        <PubliDivisor />
        <PublicOferTop />
        <Home1 />
      </div>
    </>
  );
}
