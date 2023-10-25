import React from "react";
import { Wrapper, MyLink, LogoImg } from "../CommonComponenst";
import { NavList, MyInner } from "./Header.styled";
import Bikelogo from "./bike.svg";

const Header = () => {
  return (
    <Wrapper>
      <MyInner>
        <a href="/">
          <LogoImg src={Bikelogo} alt={"bike"} />
        </a>
        <NavList>
          <MyLink to="/">Home</MyLink>
          <MyLink to="/Catalog">Catalog</MyLink>
          <MyLink to="/Cart">Cart</MyLink>
        </NavList>
      </MyInner>
    </Wrapper>
  );
};

export default Header;
