import { RiSearchLine } from "@remixicon/react";

export const Searchbar: React.FC = (): React.ReactElement => {
  return (
    <div className="flex justify-between items-stretch   bg-white border-slate-800 rounded-sm p-1 w-full md:w-2/3">
      <input type="text" placeholder="Busca en Ramitech" className="w-full mx-1" />
      <button className="bg-red-500 block rounded-sm px-3 ">
        <RiSearchLine color="#ffffff" size={15} className="m-auto" />
      </button>
    </div>
  );
};
