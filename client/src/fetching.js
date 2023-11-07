import axios from "axios";

export const getBikeList = (filterCriteria) => {
  return axios.get("/api/bike", { params: filterCriteria });
};

export const getBikeTypeData = () => {
  return axios.get("/api/biketypes");
};

export const getDetailedBikeInfo = (bikeId) => {
  return axios.get(`/api/bike/${bikeId}`);
};
