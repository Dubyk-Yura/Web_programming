import React from "react";
import { BikeImage, BikeInner, BikeName, BikePrice, BikeText, BikeWrapper } from "./BikeItems.styled";
import DefaultBike from "./bikedefault.svg";
import { NavLink } from "react-router-dom";

const BikeItemTemplate = ({
  id,
  name = "Somebike",
  price = 0,
  weight = 0,
  type = "No type",
  imageSrc = DefaultBike,
}) => {
  return (
    <BikeWrapper>
      <BikeInner>
        <BikeImage  src={imageSrc} />
        <BikeName>{name}</BikeName>
        <BikeText>Weight: <text>{weight} kg</text></BikeText>
        <BikeText>Type: <text>{type}</text></BikeText>
        <BikePrice>Price:<div style={{marginRight:"20px"}}>{price}$</div></BikePrice>
        <NavLink exact to={`/Catalog/${id}`}>View more</NavLink>
      </BikeInner>
    </BikeWrapper>
  );
};
export default BikeItemTemplate;
