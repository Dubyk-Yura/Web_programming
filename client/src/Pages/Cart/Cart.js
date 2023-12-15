import { useSelector } from "react-redux";
import {
  ButtonList,
  CartItem,
  CartItemCount,
  CartItemImage,
} from "./Cart.styled";
import { NavLink } from "react-router-dom";
import { Inner, Wrapper } from "../../components/CommonComponenst";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./action";
import { useState, useEffect } from "react";

const Cart = () => {
  const bikeList = useSelector((state) => state.bikeList);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    bikeList.forEach((bike) => {
      sum += Math.round(bike.price) * bike.count;
    });
    setTotalPrice(sum);
  }, [bikeList]);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ bikeList: bikeList }), [
      bikeList,
    ]);
  });

  const handleIncrement = (name) => {
    dispatch(incrementCount(name));
  };

  const handleDecrement = (name) => {
    dispatch(decrementCount(name));
  };
  
  const filteredBikeList = bikeList.filter((bike) => bike.count > 0);

  return (
    <Inner style={{ display: "block" }}>
      <div>
        {filteredBikeList.length > 0 ? (
          filteredBikeList.map((bike, index) => (
            <NavLink
              exact="true"
              to={`/Catalog/${bike.id}`}
              style={{ textDecoration: "none", color: "black" }}
              onClick={(e) => {
                if (e.target.tagName === "BUTTON") {
                  e.preventDefault();
                }
              }}
            >
              <Wrapper key={index}>
                <CartItem>
                  <CartItemImage src={bike.img} />
                  <h3>{bike.name}</h3>
                  <CartItemCount>
                    <button onClick={() => handleDecrement(bike.name)}>
                      -
                    </button>
                    <p>{bike.count}</p>
                    <button onClick={() => handleIncrement(bike.name)}>
                      +
                    </button>
                  </CartItemCount>
                  <h4>{Math.round(bike.price)*bike.count}$</h4>
                </CartItem>
              </Wrapper>
            </NavLink>
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              marginBottom: "80px",
              marginTop: "80px",
              fontSize: "40px",
            }}
          >
            Cart page is empty. Please add element in catalog to see them.
          </div>
        )}
      </div>
      {totalPrice > 0 && (
        <p style={{ fontSize: "2.2vw", marginLeft: "1vw" }}>
          Total Price: {totalPrice}$
        </p>
      )}
      <ButtonList>
        <NavLink to="/Catalog">Back to Catalog</NavLink>
        {totalPrice > 0 && <NavLink to="/Cart/Checkout">Continue</NavLink>}
      </ButtonList>
    </Inner>
  );
};

export default Cart;
