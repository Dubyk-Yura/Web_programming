import React from "react";
import { Wrapper, LogoImg } from "../CommonComponenst";
import { NavList, MyInner } from "./Header.styled";
import Bikelogo from "./bike.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <MyInner>
        <a href="/">
          <LogoImg src={Bikelogo} alt={"bike"} />
        </a>
        <NavList>
          <NavLink exact="true" to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink exact="true" to="/Catalog" activeclassname="active">
            Catalog
          </NavLink>
          <NavLink exact="true" to="/Cart" activeclassname="active">
            Cart
          </NavLink>
        </NavList>
      </MyInner>
    </Wrapper>
  );
};

export default Header;
