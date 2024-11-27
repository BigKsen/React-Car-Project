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
  const [currentImage, setCurrentImage] = useState(null); // récup image dynamique du configurator sur la page summery

  // Fonction pour mettre à jour la sélection (à utiliser dans Summery ou ailleurs)
  const updateSelection = (newSelection) => {
    setSelectedBrand(newSelection.brand);
    setSelectedModel(newSelection.model);
    setSelectedExterior(newSelection.exterior);
    setSelectedInterior(newSelection.interior);
    setSelectedWheels(newSelection.wheels);
    setSelectedHighlights(newSelection.highlights);
    setModelData(newSelection.modelData);
  };

  const resetAll = () => {
    setSelectedBrand(""); // Utilisez une chaîne vide plutôt que null si vous avez besoin de valeurs vides
    setSelectedModel("");
    setSelectedExterior("");
    setSelectedInterior("");
    setSelectedWheels("");
    setSelectedHighlights("");
    setModelData(null); // Cela peut rester `null` si vous voulez supprimer les données du modèle
    setCurrentImage(null); // Réinitialiser l'image dynamique du configurator sur la page summery
  };

  return (
    <SelectedContext.Provider
      value={{
        currentImage,
        setCurrentImage, // Fournir l'état de l'image
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
      }}>
      {children}
    </SelectedContext.Provider>
  );
};
