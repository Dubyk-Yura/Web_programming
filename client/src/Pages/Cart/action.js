export const action = { type: "", payLoad: {} };

export const incrementCount = (bikeName) => {
  return {
    type: "INCREMENT_COUNT",
    payload: { name: bikeName },
  };
};

export const decrementCount = (bikeName) => {
  return {
    type: "DECREMENT_COUNT",
    payload: { name: bikeName },
  };
};
