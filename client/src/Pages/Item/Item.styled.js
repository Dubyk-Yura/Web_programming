import styled from "styled-components";

export const ItemImage = styled.img`
  display: flex;
  margin-top: 10px;
  height: 30vw;
  width: 30vw;
  align-self: flex-start;
  margin-left: 2vw;
  margin-right: 13vw;
`;

export const SomeFlexBox = styled.div`
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 1vw;
    margin-top: 1.4vw;
    font-size: 3vw;
  }

  p {
    margin: 0;
    margin-bottom:0.4vw;
    font-size: 1.5vw;
  }

  p1 {
    margin-top: 2vw;
    margin-bottom: 2vw;
    font-size: 1.4vw;
    font-weight: 500;
  }

  h3 {
    margin: 0;
    margin-bottom:0.6vw;
    font-size:1.6vw;
  }
`;

export const ButtonList = styled.div`
  margin-top: 7vw;
  margin-bottom: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }
  
  a:hover{
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }

  button{
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
    cursor: pointer;
  }

  button:hover{
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }
`;
