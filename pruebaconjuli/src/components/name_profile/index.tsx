"use client";
import { useState, useEffect } from "react";
export const NameProfile: React.FC = (): React.ReactElement => {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    const getuser = JSON.parse(localStorage.getItem("user") || "{}");
    setName(getuser.name)
  }, []);
  
  return (
    <div className="hidden md:block w-full max-w-40">
      <p className="block text-right ">{name}</p>
    </div>
  );
};
