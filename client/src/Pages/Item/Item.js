import React, { useState, useEffect } from "react";
import { getDetailedBikeInfo } from "../../fetching";
import { useParams } from "react-router-dom";
import { Inner, Wrapper } from "../../components/CommonComponenst";
import DefaultBike from "../../components/HomeItems/bikedefault.svg";
import { ButtonList, ItemImage, SomeFlexBox } from "./Item.styled";
import { NavLink } from "react-router-dom";

const BikeViewMore = () => {
  const { id } = useParams();
  const [bikeData, setBikeData] = useState(null);

  useEffect(() => {
    getDetailedBikeInfo(id)
      .then((response) => {
        setBikeData(response.data);
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних про велосипед:", error);
      });
  }, [id]);

  if (!bikeData) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper style={{ maxWidth: "97%" }}>
      <Inner style={{ justifyContent: "flex-start" }}>
        <ItemImage src={DefaultBike} />
        <SomeFlexBox>
          <h2>{bikeData.name}</h2>
          <p>{bikeData.price} $</p>
          <p1>{bikeData.description}</p1>
          <h3>Additional info:</h3>
          <p>&nbsp;&nbsp;&nbsp; Weight of bike: {bikeData.weight} kg</p>
          <p>&nbsp;&nbsp;&nbsp; Type of bike: {bikeData.type}</p>
          <ButtonList>
            <NavLink to="/Catalog">Go back</NavLink>
            <button>Add to cart</button>
          </ButtonList>
        </SomeFlexBox>
      </Inner>
    </Wrapper>
  );
};

export default BikeViewMore;
