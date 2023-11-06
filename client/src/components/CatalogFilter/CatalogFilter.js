import { Inner, Wrapper } from "../CommonComponenst";
import { MyButton, MyLabel, SelectSort } from "./CatalogFilter.styled";
import { useState } from "react";

const CatalogFilter = ({ applyFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleApplyClick = () => {
    applyFilter(minPrice, maxPrice, sortBy, searchInput);
  };

  return (
    <Wrapper style={{ borderRadius: "12px", maxWidth: "97%" }}>
      <Inner
        style={{
          justifyContent: "space-between",
          marginBottom: "1.4vw",
          marginTop: "1.4vw",
        }}
      >
        <SelectSort
          name="question"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option style={{ display: "none" }}>Choose option</option>
          <option value="price">Sort by price</option>
          <option value="name">Sort by title</option>
          <option value="weight">Sort by weight</option>
        </SelectSort>
        <div style={{ display: "flex" }}>
          <MyLabel>
            Minimum price
            <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </MyLabel>
          <MyLabel>
            Maximum price
            <input
              type="number"
              name="MaxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </MyLabel>
        </div>
        <MyLabel>
          Search
          <input
            type="text"
            name="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Type something..."
          />
        </MyLabel>
        <MyButton onClick={handleApplyClick}>
          <p>Apply</p>
        </MyButton>
      </Inner>
    </Wrapper>
  );
};
export default CatalogFilter;
