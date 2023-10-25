import styled from "styled-components";
import { Inner } from "../CommonComponenst";

export const NavList = styled.ul`
  margin-top: 11px;
  padding: 0;
  margin-right: 20px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.3vw;
    color: black;
    padding: 0.7vw 2.9vw;
    border: 1px solid #d6d6d6;
    border-radius: 18px;
    background-color: #e6e6e6;
    box-shadow: 2px 3px 5px #bbbbbb;
    margin-right: 20px;
  }

  .active {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }
`;

export const MyInner = styled(Inner)`
  margin: 1.5vw auto 5px auto;
`;
