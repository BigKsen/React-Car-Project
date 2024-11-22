import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Brands from "./Pages/Brands/Brands";
import Configurator from "./Pages/Configurator/Configurator";
import Contact from "./Pages/Contact/Contact";
import Header from "./Containers/Header/Header";
import Main from "./Pages/Main/Main";
import Footer from "./Containers/Footer/Footer";
import Policy from "./Composants/Policy/Policy";
import Audi from "./Pages/Audi/Audi";
import AudiA8 from "./Pages/Audi/AudiA8";
import AudiRS from "./Pages/Audi/AudiRS";
import AudiQ7 from "./Pages/Audi/AudiQ7";
import BMW from "./Pages/BMW/BMW";
import BMWi7 from "./Pages/BMW/BMWI7";
import BMWM8 from "./Pages/BMW/BMWM8";
import BMWXM from "./Pages/BMW/BMWXM";
import Mercedes from "./Pages/Mercedes/Mercedes";
import MercedesCLE from "./Pages/Mercedes/MercedesCLE";
import MercedesGLE from "./Pages/Mercedes/MercedesGLE";
import MercedesMaybach from "./Pages/Mercedes/MercedesMaybach";
import Summery from "./Pages/Summery/Summery";
import Form from "./Composants/Form/Form";
import Final from "./Pages/Final/Final";
import { SelectedProvider } from "./Composants/SelectedContext";
import BackBtn from "./Composants/BackBtn/BackBtn";

function App() {
  return (
    <SelectedProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/Audi" element={<Audi />} />
          <Route path="/Audi/AudiA8" element={<AudiA8 />} />
          <Route path="/Audi/AudiRS" element={<AudiRS />} />
          <Route path="/Audi/AudiQ7" element={<AudiQ7 />} />
          <Route path="/BMW" element={<BMW />} />
          <Route path="/BMW/BMWi7" element={<BMWi7 />} />
          <Route path="/BMW/BMWM8" element={<BMWM8 />} />
          <Route path="/BMW/BMWXM" element={<BMWXM />} />
          <Route path="/Mercedes" element={<Mercedes />} />
          <Route path="/Mercedes/MercedesCLE" element={<MercedesCLE />} />
          <Route path="/Mercedes/MercedesGLE" element={<MercedesGLE />} />
          <Route
            path="/Mercedes/MercedesMaybach"
            element={<MercedesMaybach />}
          />
          <Route path="/summery" element={<Summery />} />
          <Route path="/form" element={<Form />} />
          <Route path="/final" element={<Final />} />
          <Route path="/backpage" element={<BackBtn />} />
        </Routes>
        <Footer />
      </Router>
    </SelectedProvider>
  );
}

export default App;
