import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import HomeItems from "../../components/HomeItems/HomeItems";
import { ViewMore } from "./Home.styled";
import { Loading } from "../../components/CommonComponenst";
import { getBikeTypeData } from "../../fetching";

const Home = () => {
  const [bikeTypeData, setBackendData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    getBikeTypeData()
      .then((response) => {
        setBackendData(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Помилка під час отримання даних:', error);
        setLoading(false); 
      });
  }, []);

  const showMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); 
  };

  return (
    <div>
      <Heading />
      {loading ? (
      <Loading /> 
    ) : (
      <>
        <HomeItems data={bikeTypeData.slice(0, visibleItems)} />
        <ViewMore>
          {visibleItems < bikeTypeData.length && (
            <button onClick={showMore}>View more</button>
          )}
        </ViewMore>
      </>
    )}
    </div>
  );
};

export default Home;
