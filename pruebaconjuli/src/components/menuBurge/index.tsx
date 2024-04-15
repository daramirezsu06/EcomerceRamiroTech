import { RiMenuLine } from "@remixicon/react";
import { ItoggleMenu } from "@/app/types";
export const MenuBurger: React.FC<ItoggleMenu> = ({ toggleMenu }): React.ReactElement => {
  return (
    <div className="md:hidden" onClick={toggleMenu}>
      <RiMenuLine color="#ffffff" size={30} />
    </div>
  );
};
