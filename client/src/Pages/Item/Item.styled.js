import styled from "styled-components";

export const ItemImage = styled.img`
  height: 30vw;
  width: 30vw;
  margin-left: 2vw;
  margin-right: 13vw;
`;

export const SomeFlexBox = styled.div`
  margin-top: 3vw;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1.4vw 0 1vw;
    font-size: 3vw;
  }

  p {
    margin: 0;
    margin-bottom: 0.4vw;
    font-size: 1.5vw;
  }

  p1 {
    margin: 2vw 0;
    font-size: 1.4vw;
    font-weight: 500;
  }

  h3 {
    margin: 0;
    margin-bottom: 0.6vw;
    font-size: 1.6vw;
  }
  p2{
    margin: 0;
    font-size: 2.5vw;
    font-weight:500;
  }
`;

export const ButtonList = styled.div`
  margin: 7vw 0 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a,
  button {
    text-decoration: none;
    color: black;
    border: 1px solid #d6d6d6;
    border-radius: 18px;
    background-color: #e6e6e6;
    box-shadow: 2px 3px 5px #bbbbbb;
    padding: 0.7vw 2.9vw;
    font-size: 1.3vw;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }

  a {
    margin-right: 20px;
  }

  a:hover,
  button:hover {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
    cursor: pointer;
  }
`;
