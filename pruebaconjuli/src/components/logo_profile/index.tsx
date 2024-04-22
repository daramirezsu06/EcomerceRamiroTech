"use client";
import { use, useEffect, useState } from "react";
export const LogoProfile: React.FC = (): React.ReactElement => {
  const [leter, setLeter] = useState<string>("A");

  useEffect(() => {
    const getuser = JSON.parse(localStorage.getItem("user") || "{}");
    const firstleter = getuser.name?.slice(0, 1).toUpperCase();
    setLeter(firstleter);
  }, []);

  return (
    <div className="bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center">
      <p className="text-white ">{leter}</p>
    </div>
  );
};
