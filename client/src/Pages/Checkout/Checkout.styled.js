import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin: 2rem auto;
  width: 60%;
  min-height: 87vh;
  Form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

export const NameSurname = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const CheckoutTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #333333;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  gap: 1rem;
`;

export const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 100px;
  a {
    border: 2px solid black;
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
    cursor: pointer;
  }
`;
