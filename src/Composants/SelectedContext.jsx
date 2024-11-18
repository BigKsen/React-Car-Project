import React, { createContext, useContext, useState } from "react";

// Contexte pour partager les sélections
const SelectedContext = createContext();

export const useSelected = () => useContext(SelectedContext);

export const SelectedProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedExterior, setSelectedExterior] = useState("");
  const [selectedInterior, setSelectedInterior] = useState("");
  const [selectedWheels, setSelectedWheels] = useState("");
  const [selectedHighlights, setSelectedHighlights] = useState("");
  const [modelData, setModelData] = useState(null);

const resetAll = () => {
    setSelectedBrand(""); // Utilisez une chaîne vide plutôt que null si vous avez besoin de valeurs vides
    setSelectedModel("");
    setSelectedExterior("");
    setSelectedInterior("");
    setSelectedWheels("");
    setSelectedHighlights("");
    setModelData(null); // Cela peut rester `null` si vous voulez supprimer les données du modèle
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
              selectedWheels,
              setSelectedWheels,
              selectedHighlights,
              setSelectedHighlights,
              modelData,
              setModelData, // Fournir la fonction de mise à jour
              resetAll, // Fournir la fonction de réinitialisation
          }}
      >
          {children}
      </SelectedContext.Provider>
  );
};
