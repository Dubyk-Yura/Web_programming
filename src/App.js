import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Catalog" element ={<Footer/>} /> 
        <Route path="/Cart" element ={<div>Its Cart page</div>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
