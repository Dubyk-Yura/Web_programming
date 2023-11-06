import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeadingText,
  Image,
  DiffInner,
  DiffWrapper,
} from "./Heading.styled";
import BikePNG from "./bicycle.png";

const Heading = () => {
  return (
    <DiffWrapper>
      <DiffInner>
        <Image src={BikePNG} />
        <HeadingText>
          <h1>Bicycle is transport</h1>
          <h4>
            Bicycles are a versatile mode of transportation, offering numerous
            advantages. They are sustainable, cost-effective, and promote
            personal well-being. In this text, we'll explore the various facets
            that make bicycles an efficient and eco-friendly choice for
            commuting.
          </h4>
          <NavLink to="/Article">Read more</NavLink>
        </HeadingText>
      </DiffInner>
    </DiffWrapper>
  );
};

export default Heading;
