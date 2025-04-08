import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Nav/>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
