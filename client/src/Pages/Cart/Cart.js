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

const Cart = () => {
  const bikeList = useSelector((state) => state.bikeList);
  const dispatch = useDispatch();

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
        {filteredBikeList.map((bike, index) => (
          <Wrapper key={index}>
            <CartItem>
              <CartItemImage src={bike.img} />
              <h3>{bike.name}</h3>
              <CartItemCount>
                <button onClick={() => handleDecrement(bike.name)}>-</button>
                <p>{bike.count}</p>
                <button onClick={() => handleIncrement(bike.name)}>+</button>
              </CartItemCount>
              <h4>{bike.price}$</h4>
            </CartItem>
          </Wrapper>
        ))}
      </div>
      <ButtonList>
        <NavLink to="/Catalog">Back to Catalog</NavLink>
        <button>Continue</button>
      </ButtonList>
    </Inner>
  );
};

export default Cart;
