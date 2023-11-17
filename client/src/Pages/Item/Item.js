import React, { useState, useEffect } from "react";
import { getDetailedBikeInfo } from "../../fetching";
import { useParams } from "react-router-dom";
import { Inner, Wrapper } from "../../components/CommonComponenst";
import DefaultBike from "../../components/HomeItems/bikedefault.svg";
import { ButtonList, ItemImage, SomeFlexBox } from "./Item.styled";
import { NavLink } from "react-router-dom";
import { Loading } from "../../components/CommonComponenst";
import { useDispatch } from "react-redux";

const BikeViewMore = () => {
  const { id } = useParams();
  const [bikeData, setBikeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const addBike = () => {
    dispatch({
      type: "ADD_BIKE",
      payLoad: {
        id:bikeData.id,
        img: DefaultBike,
        name: bikeData.name,
        price: bikeData.price,
        count: 1,
      },
    });
  };
  console.log(bikeData)
  useEffect(() => {
    setLoading(true);
    getDetailedBikeInfo(id)
      .then((response) => {
        setBikeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про велосипед:", error);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper style={{ maxWidth: "97%" }}>
          <Inner style={{ justifyContent: "flex-start" }}>
            <ItemImage src={DefaultBike} />
            <SomeFlexBox>
              <h2>{bikeData.name}</h2>
              <p2>{bikeData.price} $</p2>
              <p1>{bikeData.description}</p1>
              <h3>Additional info:</h3>
              <p>&nbsp;&nbsp;&nbsp; Weight of bike: {bikeData.weight} kg</p>
              <p>&nbsp;&nbsp;&nbsp; Type of bike: {bikeData.type}</p>
              <ButtonList>
                <NavLink to="/Catalog">Go back</NavLink>
                <button onClick={() => addBike()}>Add to cart</button>
              </ButtonList>
            </SomeFlexBox>
          </Inner>
        </Wrapper>
      )}
    </div>
  );
};

export default BikeViewMore;
