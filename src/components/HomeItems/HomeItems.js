import React from "react";
import { ItemsWrapper } from "./HomeItems.styled";
import ItemTemplate from "./ItemTemplate";

const HomeItems = ({data=[]}) => {
  return (
    <ItemsWrapper>
      {data.map(({ title, description, imageSrc }, idx) => (
        <ItemTemplate title={title} desc={description} imageSrc={imageSrc} id={idx} />
      ))}
    </ItemsWrapper>
  );
};

export default HomeItems;
