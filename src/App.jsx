import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Brands from "./Pages/Brands/Brands";
import Configurator from "./Pages/Configurator/Configurator";
import Contact from "./Pages/Contact/Contact";
import Header from "./Containers/Header/Header";
import Main from "./Pages/Main/Main";
import Footer from "./Containers/Footer/Footer";
import Policy from "./Composants/Policy";
import Audi from "./Pages/Audi/Audi"

function App() {


  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/configurator" element={<Configurator />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/Audi" element={<Audi />} />

          </Routes>
          <Footer />
      </>
  );
}

export default App;
