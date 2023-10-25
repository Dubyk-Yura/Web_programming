import styled from "styled-components";

export const MediaList = styled.ul`
  display: flex;
  padding: 0;
  width: 25%;
  align-self: end;
  justify-content: space-around;

  a {
    cursor: auto;
  }

  img {
    transition: transform 0.5s ease;
    height: 2vw;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.3);
  }
`;

export const BrandInfo = styled.div`
  max-width: 25vw;
  align-self: flex-end;
  h1 {
    font-size: 2vw;
    margin-top: 0;
  }
  h4 {
    font-weight: 500;
    color: gray;
    font-size: 1vw;
    margin-bottom: 0;
  }
`;

export const FooterRectangle = styled.div`
  background-color: darkgrey;
  height: 2px;
  border-radius: 10px;
  max-width: 90%;
  margin: 15px auto 0 auto;
`;

export const Copyright = styled.div`
  font-size: 1.1vw;
  text-align: center;
  color: darkgrey;
  margin-top: 15px;
  margin-bottom: 2.1vw;
`;
