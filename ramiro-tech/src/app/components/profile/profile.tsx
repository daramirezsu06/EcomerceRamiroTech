import { ProfileContainer, Image } from "./profile.styles";

const Profile: React.FC = (): React.ReactElement => {
  return (
    <ProfileContainer>
      <Image
        src="    https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="Profile"
      />
    </ProfileContainer>
  );
};

export default Profile;
