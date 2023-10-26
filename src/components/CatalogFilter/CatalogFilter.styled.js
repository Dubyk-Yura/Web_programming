import styled from "styled-components";
import { Dropdown } from "rsuite";

const buttonStyles = `
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

export const MyDropdown = styled(Dropdown)`
  button {
    ${buttonStyles}
  }

  button:hover {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }

  ul {
    background-color: #e6e6e6;
    position: absolute;
    z-index: 999;
    list-style: none;
    padding-left: 0;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #c2c2c2;
    border-radius: 9px;
    padding: 8px 5px 8px 5px;
    margin-top: 3px;
    width: 8.1vw;
    text-align: center;
    box-shadow: 2px 3px 5px #bbbbbb;
  }

  li {
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid black;
    background-color: lightgray;
    margin-bottom: 4px;
    cursor: pointer;
    font-size: 1vw;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

export const MyButton = styled.button`
  ${buttonStyles}
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SortedBy = styled.label`
  ${buttonStyles}
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
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
  }
`;
