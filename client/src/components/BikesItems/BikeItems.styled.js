import { Inner, Wrapper } from "../CommonComponenst";
import styled from "styled-components";

export const BikeInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  margin: 0 10% 0 10%;
  min-height: 24.3vw;
  max-height: 100%;
  a {
    text-decoration: none;
    text-align: center;
    font-size: 1.3vw;
    font-weight: 600;
    color: black;
    padding: 0.6vw 0;
    border: 1px solid #d6d6d6;
    border-radius: 15px;
    background-color: #e6e6e6;
    box-shadow: 2px 3px 5px #bbbbbb;
    margin: 0.7vw 5% 1.04vw 5%;
  }
`;

export const BikeWrapper = styled(Wrapper)`
  margin: 0;
  width: 100%;
  border-radius: 16px;
  height: auto;
`;

export const BikeImage = styled.img`
  align-self: center;
  margin-top: 10px;
  max-height: 11vw;
`;

export const BikeName = styled.h2`
  font-size: 2vw;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const BikeText = styled.h5`
  font-size: 1.4vw;
  font-weight: 600;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  span {
    color: #696969;
    font-weight: 500;
  }
`;

export const BikePrice = styled(BikeText)`
  display: flex;
  justify-content: space-between;
`;

export const BikeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22%, 22%));
  max-width: 97%;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 3vw;
  margin-top: 30px;
  margin-bottom: 40px;
`;
