import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  max-width: 98.5%;
  margin: 10px auto 10px auto;
  border-radius: 24px;
  border: 1px solid #dddddd;
  box-shadow: 0 3px 7px #bbbbbb;
`;

export const Inner = styled.div`
  max-width: 90%;
  margin: 20px auto 5px auto;
  display: flex;
  justify-content: space-between;
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3vw;
  color: black;
  padding: 0.7vw 2.9vw;
  border: 1px solid #d6d6d6;
  border-radius: 18px;
  background-color: #e6e6e6;
  box-shadow: 2px 3px 5px #bbbbbb;
  margin-right: 20px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  height: 6.8vw;
`;
