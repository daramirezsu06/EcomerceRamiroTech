"use client";
import { useState } from "react";
import { HeaderBottomContainer } from "../header_bottom_container";
import { HeaderTopContainer } from "../header_top_container";
import { ToggleMenu } from "../toggleMenu";
import { NavBarLeft } from "../navBarLeft";
export const Header1: React.FC = (): React.ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let scrollPosition = 0;
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setIsScrolled(currentScroll >= scrollPosition);
    scrollPosition = currentScroll;

    console.log(isScrolled);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }
  return (
    <>
      <header
        className="bg-gradient-to-b from-red-600 to-red-300 h-32 sticky w-full transition-all duration-1000"
        style={{ top: isScrolled ? "-8rem" : "0px" }}>
        <div className="md:w-3/4  md:m-auto mx-4 flex-col content-around h-full">
          <HeaderTopContainer toggleMenu={toggleMenu} />
          {isMenuOpen && <ToggleMenu />}
          <HeaderBottomContainer />
        </div>
      </header>
    </>
  );
};
