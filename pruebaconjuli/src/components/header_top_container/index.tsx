import StatusMenuProvider from "../contexto";
import { HeaderTopright } from "../header_top_container_rihgt";
import { LogoCar } from "../logo-car";
import { MenuBurger } from "../menuBurge";
import { Profile } from "../profile";
import { Searchbar } from "../searchbar";
import { ItoggleMenu } from "@/app/types";
import { ToggleMenu } from "../toggleMenu";

export const HeaderTopContainer: React.FC = (): React.ReactElement => {
  return (
    <>
      <StatusMenuProvider>
        <div className="flex justify-between gap-4 items-center py-4">
          <Searchbar />
          <HeaderTopright />
        </div>
        <ToggleMenu />
      </StatusMenuProvider>
    </>
  );
};
