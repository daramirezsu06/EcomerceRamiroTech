import { LogoProfile } from "../logo_profile";
import { NameProfile } from "../name_profile";

export const Profile: React.FC = (): React.ReactElement => {
  return (
    <div className="flex content-center gap-1 items-center ">
      <LogoProfile />
      <NameProfile />
    </div>
  );
};
