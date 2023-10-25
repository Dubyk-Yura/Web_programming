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
    <Wrapper style={{ borderRadius: "12px" }}>
      <Inner style={{ justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex" }}>
          <MyDropdown title="Filter">
            <Dropdown.Item>Sort by price</Dropdown.Item>
            <Dropdown.Item>Sort by title</Dropdown.Item>
            <Dropdown.Item>Sort by weight</Dropdown.Item>
          </MyDropdown>
          <SortedBy>
            <a>Bikes sorted by: title/name/weight</a>
          </SortedBy>
        </div>
        <div style={{ display: "flex" }}>
          <MyLabel>
            Minimum price <input name="minPrice" />
          </MyLabel>
          <MyLabel>
            Maximum price <input name="MaxPrice" />
          </MyLabel>
        </div>
        <MyButton><a>Apply</a></MyButton>
      </Inner>
    </Wrapper>
  );
};
export default CatalogFilter;
