
import { RenderProducts } from "@/components/cartsProducts";
import Footer from "@/components/footer";
import { HeaderCurrent } from "@/components/headerCurrent";

export default function Home() {
  return (
    <>
      <HeaderCurrent />
      <div className="bg-slate-100">
        <RenderProducts />
      </div>
      <Footer/>
    </>
  );
}
