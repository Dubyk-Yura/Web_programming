import React, { useEffect, useState } from "react";
import axios from "axios";
import BikeItems from "../../components/BikesItems/BikeItems";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { Loading } from "../../components/CommonComponenst";

const Catalog = () => {
  const [bikeListData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCriteria, setFilterCriteria] = useState({
    minPrice: "",
    maxPrice: "",
    sortBy: "",
    searchInput: "",
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/bike", {
        params: filterCriteria,
      })
      .then((response) => {
        setBackendData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних:", error);
        setLoading(false);
      });
  }, [filterCriteria]);

  const applyFilter = (minPrice, maxPrice, sortBy, searchInput) => {
    setFilterCriteria({
      minPrice,
      maxPrice,
      sortBy,
      searchInput,
    });
  };

  return (
    <div>
      <CatalogFilter applyFilter={applyFilter} />
      {loading ? (
        <Loading />
      ) : (
        <BikeItems data={bikeListData} filterCriteria={filterCriteria} />
      )}
    </div>
  );
};

export default Catalog;
