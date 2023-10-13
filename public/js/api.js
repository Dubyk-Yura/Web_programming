const BASE_URL = "http://localhost:5500/api";
// const STORAGE_URL = `${BASE_URL}/bike`;

const baseRequest = async ({
  pathUrl = "/bike",
  method = "GET",
  body = null,
}) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${BASE_URL}${pathUrl}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

const getAllBikes = async () => {
  const rawResponse = await baseRequest({ method: "GET" });
  return rawResponse.json();
};
const getSortedBike = async () => {
  const rawResponse = await baseRequest({
    pathUrl: `/bikesort`,
    method: "GET",
  });
  return rawResponse.json();
};

const postBike = (body) => baseRequest({ method: "POST", body });

const editBike = (body) => baseRequest({ method: "PUT", body });

const deleteBike = (id) =>
  baseRequest({ pathUrl: `/bike/${id}`, method: "DELETE" });
