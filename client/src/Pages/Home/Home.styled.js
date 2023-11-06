import styled from "styled-components";

export const ViewMore = styled.div`
display:flex;
justify-content:center;
  button {
    padding: 0.7vw 2.9vw;
    font-size: 2vw;
    border: 1px solid #d6d6d6;
    border-radius: 1vw;
    box-shadow: 2px 3px 5px #bbbbbb;
    cursor: pointer;
    transition: background-color 0.35s ease, border-color 0.35s ease;
  }
  button:hover{
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }
  margin-bottom:2vw;
`;
