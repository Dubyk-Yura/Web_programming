import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  ButtonsStyled,
  CheckoutContainer,
  CheckoutTitle,
  Inputs,
  NameSurname,
} from "./Checkout.styled";
import Input from "./Input";
import { checkoutSchema } from "../../regex";

const Checkout = () => {
  const navigation = useNavigate();

  const Submit = async (values,actions) => {
    actions.resetForm();
    navigation("/Cart/Success");
  };

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <Formik
        initialValues={{
          Name: "",
          Surname: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={checkoutSchema}
        onSubmit={Submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Inputs>
              <NameSurname>
                <Input
                  label="Name"
                  name="Name"
                  type="text"
                  placeholder="Enter your Name"
                />
                <Input
                  label="Surname"
                  name="Surname"
                  type="text"
                  placeholder="Enter your Surname"
                />
              </NameSurname>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your Email"
              />
              <Input
                label="Phone"
                name="phone"
                type="text"
                placeholder="Enter your Phone Number"
              />
              <Input
                label="Address"
                name="address"
                type="text"
                placeholder="Enter your Address"
              />
            </Inputs>
            <ButtonsStyled>
              <NavLink to="/Cart">Go back</NavLink>
              <button disabled={isSubmitting} htmlType="submit">
                Continue
              </button>
            </ButtonsStyled>
          </Form>
        )}
      </Formik>
    </CheckoutContainer>
  );
};
export default Checkout;
