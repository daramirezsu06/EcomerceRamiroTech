"use client";
import { useState, useEffect } from "react";
import { useLoginContext } from "../Context";
export const NameProfile: React.FC = (): React.ReactElement => {
  const { login } = useLoginContext();
  const [name, setName] = useState<string>("User no Registered");

  useEffect(() => {
    const getuserString = localStorage.getItem("user");
    const getuser = getuserString ? JSON.parse(getuserString) : null;

    if (getuser) {
      setName(getuser.name);
    }else{
      setName("User no Registered");
    }
  }, [login]);

  return (
    <div className="hidden md:block w-full max-w-40">
      <p className="block text-right ">{name}</p>
    </div>
  );
};
