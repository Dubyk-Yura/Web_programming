import React, { useEffect, useState } from "react";
import BikeItems from "../../components/BikesItems/BikeItems";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { Loading } from "../../components/CommonComponenst";
import { getBikeList } from "../../fetching";

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
    getBikeList(filterCriteria)
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
