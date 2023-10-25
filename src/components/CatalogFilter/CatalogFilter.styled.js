import styled from "styled-components";
import { Dropdown } from "rsuite";

export const MyDropdown = styled(Dropdown)`
  margin-bottom: 20px;
  
  button {
    font-size: 1.3vw;
    color: black;
    padding: 0.4vw 2.2vw;
    border: 1px solid #d6d6d6;
    border-radius: 12px;
    background-color: #e6e6e6;
    box-shadow: 2px 3px 5px #bbbbbb;
  }

  button:hover {
    background-color: #c2c2c2;
    border-color: #b3b3b3;
  }

  ul {
    background-color:#e6e6e6;
    position: absolute;
    z-index: 999;
    list-style: none;
    padding-left: 0;
    flex-direction: column;
    justify-content: center;
    border:1px solid #c2c2c2;
    border-radius:9px;
    padding:8px 5px 8px 5px;
    margin-top:3px;
    width:8.1vw;
    text-align:center;
    box-shadow: 2px 3px 5px #bbbbbb;
  }

  li {
    border-radius:8px;
    text-decoration: none;
    border:1px solid black;
    background-color: lightgray;
    margin-bottom:4px;
    cursor: pointer;
    font-size:14px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;
