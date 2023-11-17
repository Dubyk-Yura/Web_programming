import styled from "styled-components";

export const ButtonList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 1.3vw;

  button {
    background-color: darkgray;
    border: 1px solid #999999;
  }

  a {
    background-color: #e6e6e6;
    border: 1px solid #d6d6d6;
  }

  a,
  button {
    text-decoration: none;
    color: black;
    border-radius: 18px;
    box-shadow: 2px 3px 5px #bbbbbb;
    padding: 0.7vw 2.9vw;
    font-size: 1.3vw;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }

  a:hover,
  button:hover {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
    cursor: pointer;
  }
`;

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  h4 {
    margin-right: 2vw;
    width: 8%;
    max-width: 14%;
    font-size: 1.5vw;
  }
  h3 {
    margin-left: 3vw;
    font-size: 1.8vw;
  }
`;

export const CartItemCount = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 9vw;
  align-items: center;

  button {
    margin-left: 2vw;
    margin-right: 2vw;
    border-radius: 12px;
    box-shadow: 2px 3px 5px #bbbbbb;
    height: 50%;
    width: 4vw;
    font-size: 1.7vw;
    border: 1px solid #d6d6d6;
    cursor: pointer;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }
  button:hover {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
    cursor: pointer;
  }
`;
export const CartItemImage = styled.img`
  max-height: 8vw;
  margin-left: 2vw;
`;
