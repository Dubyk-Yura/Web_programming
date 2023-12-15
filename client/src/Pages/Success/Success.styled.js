import styled from "styled-components";

export const SuccessBox = styled.div`
  margin-top: 150px;
  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  h2 {
    font-size: 40px;
  }
  margin-bottom: 200px;
  

  a {
    text-decoration: none;
    color: black;
    border-radius: 18px;
    box-shadow: 2px 3px 5px #bbbbbb;
    padding: 0.7vw 2.9vw;
    background-color: #e6e6e6;
    border: 1px solid #d6d6d6;
    font-size: 1.3vw;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }

  a:hover{
    background-color: #c2c2c2;
    border-color: #b3b3b3;
    cursor: pointer;
  }
`;
