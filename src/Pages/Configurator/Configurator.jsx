import React from "react";
import { SelectedProvider } from "../../Composants/SelectedContext";
import DBConfigurator from "../../Composants/DBConfigurator/DBConfigurator";
import SelectorConfigurator from "../../Composants/SelectorConfigurator/SelectorConfigurator";

const Configurator = () => {
  return (
    <>
      <SelectedProvider>
        <div>
          <SelectorConfigurator />
          <DBConfigurator />
        </div>
      </SelectedProvider>
    </>
  );
};
export default Configurator;
