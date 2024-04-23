"use client";
import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLoginContext } from "../Context";
export const LogoCar: React.FC = (): React.ReactElement => {
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const { total } = useLoginContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      {isFixed ? (
        <div className="fixed top-10 right-10 rounded-full bg-red-500 p-4 ">
          <Link href="/cart">
            <div className="flex items-center gap-2 ">
              {total == 0 ? (
                <p>{total}</p>
              ) : (
                <p className="animate-bounce">{total}</p>
              )}

              <div>
                <RiShoppingCartLine color="#ffffff" />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/cart">
            <div className="flex items-center gap-2 ">
              {total == 0 ? (
                <p>{total}</p>
              ) : (
                <p className="animate-bounce">{total}</p>
              )}

              <div>
                <RiShoppingCartLine color="#ffffff" />
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};
