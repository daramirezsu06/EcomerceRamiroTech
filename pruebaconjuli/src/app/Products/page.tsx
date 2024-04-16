import { Header1 } from "@/components/header";
import { Home1 } from "@/components/cartsProducts";

export default function Home() {
  return (
    <>
      <Header1 />
      <div className="bg-slate-100">
        <Home1 />
      </div>
    </>
  );
}
