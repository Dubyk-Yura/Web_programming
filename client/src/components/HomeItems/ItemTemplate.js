import React from "react";
import {
  Title,
  Description,
  TempImage,
  MyInner,
  MyWrapper,
} from "./HomeItems.styled";
import DefaultBike from "./bikedefault.svg";


const ItemTemplate = ({
  title = "No title.",
  desc = "No description",
  imageSrc = DefaultBike,
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
