import Heading from "../../components/Heading/Heading";
import HomeItems from "../../components/HomeItems/HomeItems";
import MountainBike from "./bikes/mountain.png";
import ElectricBike from "./bikes/electric.png";
import BMXBike from "./bikes/BMX.png";
import { ViewMore } from "./Home.styled";

const data_1 = [
  {
    title: "Mountain Bicycles",
    description:
      "Sturdy and equipped for off-road trails, featuring wide, knobby tires and suspension systems.",
    imageSrc: MountainBike,
  },
  {
    title: "Electric Bicycles",
    description:
      "Equipped with a motor to assist pedaling, making cycling easier, especially on hills.",
    imageSrc: ElectricBike,
  },
  {
    title: "BMX Bicycles",
    description:
      "Small, strong, and ideal for tricks and stunts in skateparks and on dirt jumps.",
    imageSrc: BMXBike,
  },
];

const Home = () => {
  return (
    <div>
      <Heading />
      <HomeItems data={data_1} />
      <ViewMore>
        <button>View more</button>
      </ViewMore>
    </div>
  );
};

export default Home;
