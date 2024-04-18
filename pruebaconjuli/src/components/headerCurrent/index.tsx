import { HeaderContainer } from "../headerContainer";
import { HeaderBottomContainer } from "../header_bottom_container";
import { HeaderTopContainer } from "../header_top_container";
import StatusMenuProvider from "../contexto";
import { ToggleMenu } from "../toggleMenu";


export const HeaderCurrent: React.FC = (): React.ReactElement => {
  return (
    <>
      <StatusMenuProvider>
        <HeaderContainer>
          <HeaderTopContainer />
          <HeaderBottomContainer />
        </HeaderContainer>
        <ToggleMenu />
      </StatusMenuProvider>
    </>
  );
};
