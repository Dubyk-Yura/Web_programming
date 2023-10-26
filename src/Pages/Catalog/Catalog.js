import BikeItems from "../../components/BikesItems/BikeItems";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import bike1 from "./bikesPhoto/Bike1.png";
import bike2 from "./bikesPhoto/Bike2.png";
import bike3 from "./bikesPhoto/Bike3.png";
import bike4 from "./bikesPhoto/Bike4.png";
import bike5 from "./bikesPhoto/Bike5.png";
import bike6 from "./bikesPhoto/Bike6.png";

const bikedata = [
  {
    id: 1,
    name: "Bike1",
    price: 1100,
    weight: 6,
    type: "Mountain",
    imageSrc: bike1,
  },
  {
    id: 2,
    name: "Bike2",
    price: 1200,
    weight: 10,
    type: "Mountain",
    imageSrc: bike2,
  },
  {
    id: 3,
    name: "Bike3",
    price: 1000,
    weight: 20,
    type: "Mountain",
    imageSrc: bike3,
  },
  {
    id: 4,
    name: "Bike4",
    price: 900,
    weight: 11,
    type: "Mountain",
    imageSrc: bike4,
  },
  {
    id: 5,
    name: "Bike5",
    price: 100,
    weight: 10,
    type: "Racing",
    imageSrc: bike5,
  },
  {
    id: 6,
    name: "Bike6",
    price: 3770,
    weight: 15,
    type: "Mountain",
    imageSrc: bike6,
  },
  {
    id: 7,
    name: "Bike7",
    price: 2200,
    weight: 4,
    type: "Mountain",
  },
];

const Catalog = () => {
  return (
    <div>
      <CatalogFilter />
      <BikeItems data={bikedata} />
    </div>
  );
};

export default Catalog;
