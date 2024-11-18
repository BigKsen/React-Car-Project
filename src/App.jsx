import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
import Summery from "./Pages/Summery/Summery";
import {SelectedProvider} from "./Composants/SelectedContext";

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
                    <Route path="/summery" element={<Summery />} />
                </Routes>
                <Footer />
        </Router>
            </SelectedProvider>
    );
}

export default App;

