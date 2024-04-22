"use client";
import { useLoginContext } from "../Context";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavBarRight: React.FC = (): React.ReactElement => {
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
    <nav>
      <ul className="md:flex content-around gap-3 hidden ">
        <Link href="/userInfo">
          <button>User Info</button>
        </Link>

        {token && (
          <>
            <Link href="/orders">history</Link>{" "}
            <button onClick={handleClick}>Log Out</button>
          </>
        )}
        {!token && (
          <>
            <Link href="/Login">Log In</Link>
            <Link href="/Register">Register</Link>
          </>
        )}
      </ul>
    </nav>
  );
};
