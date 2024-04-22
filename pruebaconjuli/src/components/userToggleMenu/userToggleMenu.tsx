"use client";
import { useLoginContext } from "../Context";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserToggleMenuStyles } from "./userToggleMenu.styles";

const UserToggleMenu: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const { setToken, token, setLogin } = useLoginContext();
  const handleClick = () => {
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("car");
    router.push("/");
  };
  const handleClick2 = () => {
    const token = Cookies.get("token");
    console.log(token);
  };
  return (
    <UserToggleMenuStyles>
      {token && (
        <Link href="/userInfo">
          <button className="block w-full border">User Info</button>
        </Link>
      )}

      {token && (
        <>
          <Link href="/orders">history</Link>{" "}
          <button className="block w-full border" onClick={handleClick}>
            Log Out
          </button>
        </>
      )}
      {!token && (
        <>
          <Link className="block w-full border" href="/Login">
            Log In
          </Link>
          <Link className="block w-full border" href="/Register">
            Register
          </Link>
        </>
      )}
    </UserToggleMenuStyles>
  );
};

export default UserToggleMenu;
