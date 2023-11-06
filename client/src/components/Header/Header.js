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
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/Catalog" activeClassName="active">
            Catalog
          </NavLink>
          <NavLink exact to="/Cart" activeClassName="active">
            Cart
          </NavLink>
        </NavList>
      </MyInner>
    </Wrapper>
  );
};

export default Header;
