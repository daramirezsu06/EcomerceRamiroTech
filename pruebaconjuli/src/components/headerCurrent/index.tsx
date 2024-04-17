import { HeaderContainer } from "../headerContainer";
import { HeaderBottomContainer } from "../header_bottom_container";
import { HeaderTopContainer } from "../header_top_container";

export const HeaderCurrent: React.FC = (): React.ReactElement => {
  return (
    <>
      <HeaderContainer>
        <HeaderTopContainer />
        <HeaderBottomContainer />
      </HeaderContainer>
    </>
  );
};
