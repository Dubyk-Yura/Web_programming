import styled from "styled-components";

export const MyButton = styled.button`
  font-size: 1.3vw;
  color: black;
  padding: 0.4vw 2.2vw;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  background-color: #e6e6e6;
  box-shadow: 2px 3px 5px #bbbbbb;
  margin-right: 1.4vw;
  max-height: 2.3vw;
  transition: background-color 0.35s ease, border-color 0.35s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MyLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.1vw;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  background-color: #f0f0f0;
  box-shadow: 2px 3px 5px #bbbbbb;
  padding: 0 1.2vw;
  max-height: 2.3vw;
  margin-right: 1.4vw;

  input {
    padding: 0;
    padding-left: 5px;
    border: 1px solid grey;
    border-radius: 4px;
    margin-left: 6px;
    width: 7vw;
    max-height: 30%;
    min-height: 45%;
    font-size:0.75vw;
  }
`;

export const SelectSort = styled.select`
  appearance: none;
  -webkit-appearance: none;
  font-size: 1.3vw;
  color: black;
  padding: 0.4vw 2.2vw;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  background-color: #e6e6e6;
  box-shadow: 2px 3px 5px #bbbbbb;
  margin-right: 1.4vw;
  max-height: 2.3vw;
  transition: background-color 0.35s ease, border-color 0.35s ease;
`;
