"use client";
import { use, useEffect, useState } from "react";
import { useLoginContext } from "../Context";
export const LogoProfile: React.FC = (): React.ReactElement => {
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

  return (
    <div className="bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center">
      <p className="text-white ">{leter}</p>
    </div>
  );
};
