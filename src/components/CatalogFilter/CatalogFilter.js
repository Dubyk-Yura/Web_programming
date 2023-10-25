import { Inner, Wrapper } from "../CommonComponenst";
import { Dropdown } from "rsuite";
import { MyDropdown } from "./CatalogFilter.styled";

const CatalogFilter = () => {
  return (
    <Wrapper style={{ borderRadius: "12px" }}>
      <Inner style={{justifyContent:"flex-start"}}>
        <MyDropdown title="Filter">
          <Dropdown.Item>Sort by price</Dropdown.Item>
          <Dropdown.Item>Sort by title</Dropdown.Item>
          <Dropdown.Item>Sort by weight</Dropdown.Item>
        </MyDropdown>
      </Inner>
    </Wrapper>
  );
};
export default CatalogFilter;
