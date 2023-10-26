import { Inner, Wrapper } from "../CommonComponenst";
import {
  MyButton,
  MyLabel,
  SelectSort,
} from "./CatalogFilter.styled";

const CatalogFilter = () => {
  return (
    <Wrapper style={{ borderRadius: "12px", maxWidth: "97%" }}>
      <Inner
        style={{
          justifyContent: "space-between",
          marginBottom: "1.4vw",
          marginTop: "1.4vw",
        }}
      >
        <SelectSort name="question">
          <option style={{ display: "none" }}>Choose option</option>
          <option value="sortByPrice">Sort by price</option>
          <option value="sortByTitle">Sort by title</option>
          <option value="sortByWeight">Sort by weight</option>
        </SelectSort>
        <div style={{ display: "flex" }}>
          <MyLabel>
            Minimum price <input type="number" name="minPrice" />
          </MyLabel>
          <MyLabel>
            Maximum price <input type="number" name="MaxPrice" />
          </MyLabel>
        </div>
        <MyButton>
          <text>Apply</text>
        </MyButton>
      </Inner>
    </Wrapper>
  );
};
export default CatalogFilter;
