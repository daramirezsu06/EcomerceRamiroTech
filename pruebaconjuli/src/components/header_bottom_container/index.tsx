import { NavBarRight } from "../NavBarRight/navBarRight";
import { NavBarLeft } from "../navBarLeft";

export const HeaderBottomContainer: React.FC = (): React.ReactElement => {
    return (
        <>
            <div className="flex justify-between gap-4 items-center py-4">
                <NavBarLeft />
                <NavBarRight />
            </div>
        </>
    );
}