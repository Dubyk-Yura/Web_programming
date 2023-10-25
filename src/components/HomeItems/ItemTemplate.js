import React from "react";
import {
  Title,
  Description,
  TempImage,
  MyInner,
  MyWrapper,
} from "./HomeItems.styled";

const ItemTemplate = ({
  title = "No title.",
  desc = "No description",
  imageSrc = "",
}) => {
  return (
    <MyWrapper>
      <MyInner>
        <TempImage src={imageSrc} />
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </MyInner>
    </MyWrapper>
  );
};

export default ItemTemplate;
