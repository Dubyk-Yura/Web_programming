import React from "react";
import { BikeItemWrapper } from "./BikeItems.styled";
import BikeItemTemplate from "./BikeItemTemplate";

const BikeItems = ({ data = [] }) => {
  return (
    <BikeItemWrapper>
      {data.map(({ id, name, price, weight, type, imageSrc }, idx) => (
        <BikeItemTemplate
          key={idx}
          id={id}
          name={name}
          price={price}
          weight={weight}
          type={type}
          imageSrc={imageSrc}
        />
      ))}
    </BikeItemWrapper>
  );
};

export default BikeItems;
