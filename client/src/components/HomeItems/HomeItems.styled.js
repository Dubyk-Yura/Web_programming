import { Inner, Wrapper } from "../CommonComponenst";
import styled from "styled-components";

export const MyInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
`;

export const MyWrapper = styled(Wrapper)`
  margin: 0;
  width: 30%;
  margin: 0 auto;
  border-radius: 16px;
  margin-bottom: 2.1vw;
  height: 100%;
`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 2.5vw;
  text-align: center;
`;

export const Description = styled.h4`
  color: #424242;
  font-size: 1.4vw;
  font-weight: 500;
  margin: 0 1.8vw 2.5vw 1.8vw;
  text-align: center;
`;

export const TempImage = styled.img`
  display: flex;
  margin-top: 10px;
  height: 17vw;
  width: 17vw;
  align-self: center;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  max-width: 95%;
  margin: 0 auto 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;
