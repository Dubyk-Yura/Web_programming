const defaultState = {
  bikeList: [],
};

const findIndexByName = (arr, name) => {
  return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_BIKE":
      const foundIndex = findIndexByName(state.bikeList, action.payLoad.name);
      if (foundIndex === -1) {
        return { ...state, bikeList: [...state.bikeList, action.payLoad] };
      } else {
        const updatedBikeList = [...state.bikeList];
        updatedBikeList[foundIndex] = {
          ...updatedBikeList[foundIndex],
          count: updatedBikeList[foundIndex].count + 1,
        };
        console.log(updatedBikeList);
        return { ...state, bikeList: updatedBikeList };
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
    default:
      return state;
  }
};
