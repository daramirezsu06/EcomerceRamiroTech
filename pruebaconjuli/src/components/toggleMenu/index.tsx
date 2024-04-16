import Link from "next/link";

const itemsNavBar = ["Home", "About", "Products", "Contact"];

export const ToggleMenu: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-slate-500">
      <ul className="flex flex-col ">
        {itemsNavBar.map((item) => (
          <Link href={`/${item}`} key={item}>
            <li className="py-2 border-b border-slate-300" key={item}>
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
