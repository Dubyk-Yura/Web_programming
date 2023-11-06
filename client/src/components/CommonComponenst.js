import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  background-color: #f8f8f8;
  max-width: 98.5%;
  margin: 10px auto 10px auto;
  border-radius: 24px;
  border: 1px solid #dddddd;
  box-shadow: 0 3px 7px #bbbbbb;
`;

export const Inner = styled.div`
  max-width: 90%;
  margin: 20px auto 5px auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  height: 6.8vw;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
    color: #000000;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);

  &,
  &:before,
  &:after {
    border-radius: 50%;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
  }

  &:before {
    width: 5em;
    height: 10.6em;
    background: white; 
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.1em 5.1em;
    animation: ${spinAnimation} 2s infinite ease 1.5s;
  }

  &:after {
    width: 6em;
    height: 10.6em;
    background: white;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    transform-origin: 0.1em 5.1em;
    animation: ${spinAnimation} 2s infinite ease;
  }
`;
