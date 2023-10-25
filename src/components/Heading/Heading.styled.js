import styled from "styled-components";
import { Wrapper, Inner, MyLink } from "../CommonComponenst";

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

export const DiffMyLink = styled(MyLink)`
  font-size: 1.5vw;
  margin-right: 0;
  padding: 0.6vw 2.6vw;
  
`;
