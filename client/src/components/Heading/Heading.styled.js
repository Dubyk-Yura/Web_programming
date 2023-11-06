import styled from "styled-components";
import { Wrapper, Inner } from "../CommonComponenst";

export const Image = styled.img`
  width: 40%;
  height: 40%;
  margin-right: 15%;
`;

export const HeadingText = styled.div`
  h1 {
    font-size: 2.5vw;
  }

  h4 {
    color: gray;
    font-weight: 500;
    font-size: 1.5vw;
  }

  a {
    text-decoration: none;
    color: black;
    border: 1px solid #d6d6d6;
    border-radius: 18px;
    background-color: #e6e6e6;
    box-shadow: 2px 3px 5px #bbbbbb;
    font-size: 1.5vw;
    margin-right: 0;
    padding: 0.6vw 2.6vw;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }
  a:hover {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }
`;

export const DiffWrapper = styled(Wrapper)`
  max-width: 95%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DiffInner = styled(Inner)`
  max-width: 80%;
  margin: 50px auto 50px auto;
  justify-content: flex-start;
`;
