import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Brands from "./Pages/Brands/Brands";
import Configurator from "./Pages/Configurator/Configurator";
import Contact from "./Pages/Contact/Contact";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";

function App() {

  // Exemple de modif à commit

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Main />
      <Footer />
    </>
  );
}

export default App;
