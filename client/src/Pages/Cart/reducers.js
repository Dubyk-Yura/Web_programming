const defaultState = {
  bikeList: [],
};

const findIndexByName = (arr, name) => {
  return arr.findIndex((item) => item.name === name);
};

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : null;
};

export const reducer = (
  state = loadFromLocalStorage() || defaultState,
  action
) => {
  switch (action.type) {
    case "ADD_BIKE":
      const foundIndex = findIndexByName(state.bikeList, action.payLoad.name);
      if (foundIndex === -1) {
        const newState = {
          ...state,
          bikeList: [...state.bikeList, action.payLoad],
        };
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      } else {
        const updatedBikeList = [...state.bikeList];
        updatedBikeList[foundIndex] = {
          ...updatedBikeList[foundIndex],
          count: updatedBikeList[foundIndex].count + 1,
        };
        const newState = { ...state, bikeList: updatedBikeList };
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      }
    case "INCREMENT_COUNT":
      return {
        ...state,
        bikeList: state.bikeList.map((bike) => {
          if (bike.name === action.payload.name) {
            return { ...bike, count: bike.count + 1 };
          }
          return bike;
        }),
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        bikeList: state.bikeList.map((bike) => {
          if (bike.name === action.payload.name && bike.count > 0) {
            return { ...bike, count: bike.count - 1 };
          }
          return bike;
        }),
      };
    case "CLEAR_CART":
      return { ...state, bikeList: [] };
    default:
      return state;
  }
};
