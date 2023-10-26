import { Inner, Wrapper } from "../CommonComponenst";
import { Dropdown } from "rsuite";
import {
  MyButton,
  MyDropdown,
  SortedBy,
  MyLabel,
} from "./CatalogFilter.styled";

const CatalogFilter = () => {
  return (
    <Wrapper style={{ borderRadius: "12px", maxWidth:"97%" }}>
      <Inner style={{ justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex" }}>
          <MyDropdown title="Filter">
            <Dropdown.Item>Sort by price</Dropdown.Item>
            <Dropdown.Item>Sort by title</Dropdown.Item>
            <Dropdown.Item>Sort by weight</Dropdown.Item>
          </MyDropdown>
          <SortedBy>
            <text>Bikes sorted by: title/name/weight</text>
          </SortedBy>
        </div>
        <div style={{ display: "flex" }}>
          <MyLabel>
            Minimum price <input type="number" name="minPrice" />
          </MyLabel>
          <MyLabel>
            Maximum price <input type="number" name="MaxPrice" />
          </MyLabel>
        </div>
        <MyButton><text>Apply</text></MyButton>
      </Inner>
    </Wrapper>
  );
};
export default CatalogFilter;
