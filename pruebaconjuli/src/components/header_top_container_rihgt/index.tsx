import { LogoCar } from "../logo-car";
import { MenuBurger } from "../menuBurge";
import { Profile } from "../profile";
import { ItoggleMenu } from "@/app/types";

export const HeaderTopright: React.FC<ItoggleMenu> = ({
  toggleMenu,
}) => {
  return (
    <div className="flex content-right items-center gap-2 max-w-44  ">
      <MenuBurger toggleMenu={toggleMenu} />
      <LogoCar />
      <Profile />
    </div>
  );
};
