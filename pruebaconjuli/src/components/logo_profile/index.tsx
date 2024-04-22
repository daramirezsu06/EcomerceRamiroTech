"use client";
import { use, useEffect, useState } from "react";
import { useLoginContext } from "../Context";
import { useContext } from "react";
import { ContextoMenu } from "../menuContexto";
export const LogoProfile: React.FC = (): React.ReactElement => {
  const { userMenu, setUserMenu } = useContext(ContextoMenu);
  const { login } = useLoginContext();
  const [leter, setLeter] = useState<string>("?");

  useEffect(() => {
    const getuserString = localStorage.getItem("user");
    const getuser = getuserString ? JSON.parse(getuserString) : null;

    if (getuser) {
      const firstleter = getuser.name?.slice(0, 1).toUpperCase();
      setLeter(firstleter);
    } else {
      setLeter("?");
    }
  }, [login]);

  const handleClick = () => {
    setUserMenu(!userMenu);
  };

  return (
    <div
      className="bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center"
      onClick={handleClick}>
      <p className="text-white ">{leter}</p>
    </div>
  );
};
