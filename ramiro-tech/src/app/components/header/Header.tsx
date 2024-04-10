
"use client";

import { useState, useEffect } from "react";
import {
  HeaderContainer,
  TopContainer,
  MenuContainer,
  ImageContainer,
  Image,
  Title,
  MenuButton,
  IconsContainer,
  IconContainer,
  BottomContainer,
} from "./Header.styles";
import NavBar from "../navbar";
import SearchBar from "../searchbar";
import Profile from "../profile";
import CategoryList from "../category_list/container";
import Favorite from "../favorite";
import Cart from "../cart";

const Header:React.FC=():React.ReactElement=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isWindowWide, setIsWindowWide] = useState(false);
  let scrollPosition = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsHeaderVisible(scrollPosition > currentScrollPosition);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollPosition = currentScrollPosition;
    };

    const handleResize = () => {
      setIsWindowWide(window.innerWidth >= 840);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer style={{ top: isHeaderVisible ? "0" : "-100px" }}>
      <TopContainer>
        <MenuContainer>
          <ImageContainer>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/15216/15216856.png"
              alt="logo"
            />
            <Title>T Store</Title>
          </ImageContainer>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuButton>
        </MenuContainer>
        {(isMenuOpen || isWindowWide) && (
          <>
            <NavBar />
            <SearchBar />
            <IconsContainer>
              <IconContainer>
                <Favorite />
              </IconContainer>
              <IconContainer>
                <Profile />
              </IconContainer>
              <IconContainer>
                <Cart />
              </IconContainer>
            </IconsContainer>
          </>
        )}
      </TopContainer>
      {(isMenuOpen || isWindowWide) && (
        <BottomContainer>
          <CategoryList />
        </BottomContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;