import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./Pages/Catalog/Catalog";
import BikeViewMore from "./Pages/Item/Item";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<BikeViewMore />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
