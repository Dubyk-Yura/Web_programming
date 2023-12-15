import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import successIcon from "./result.svg";
import { SuccessBox } from "./Success.styled";
import { NavLink } from "react-router-dom";

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CLEAR_CART" });
  }, [dispatch]);

  return (
    <SuccessBox>
      <img alt={"success logo"} src={successIcon} />
      <h2>Success</h2>
      <h3>Your order was sent to processing!</h3>
      <h3>Check your email box for further information.</h3>
      <NavLink to="/Catalog">Back to Catalog</NavLink>
    </SuccessBox>
  );
};
export default Success;
