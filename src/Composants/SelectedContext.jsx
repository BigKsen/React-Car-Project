import React, { createContext, useContext, useState } from "react";

// Contexte pour partager les sélections
const SelectedContext = createContext();

export const useSelected = () => useContext(SelectedContext);

export const SelectedProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedExterior, setSelectedExterior] = useState("");
  const [selectedInterior, setSelectedInterior] = useState("");
  const [modelData, setModelData] = useState(null);

  const resetModelData = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedExterior("");
    setSelectedInterior("");
    setModelData(null);
  };

  return (
    <SelectedContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
        selectedExterior,
        setSelectedExterior,
        selectedInterior,
        setSelectedInterior,
        modelData,
        setModelData,
        resetModelData,
      }}>
      {children}
    </SelectedContext.Provider>
  );
};
