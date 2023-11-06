import React from "react";
import { ItemsWrapper } from "./HomeItems.styled";
import ItemTemplate from "./ItemTemplate";

const HomeItems = ({ data = [] }) => {
  return (
    <div>
      <ItemsWrapper>
        {data.map(({ title, description, imageSrc }, idx) => (
          <ItemTemplate
            key={idx}
            title={title}
            desc={description}
            imageSrc={imageSrc}
            id={idx}
          />
        ))}
      </ItemsWrapper>
    </div>
  );
};

export default HomeItems;
