import React, { useState } from "react";
import { useSelected } from "../SelectedContext";

function SelectorConfigurator() {
  const {
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedExterior,
    setSelectedExterior,
    selectedInterior,
    setSelectedInterior,
    resetModelData,
  } = useSelected();

  const brandOptions = ["Mercedes-Benz", "BMW", "Audi"];
  const modelOptions = {
    "Mercedes-Benz": ["CLE", "GLE", "Maybach"],
    BMW: ["i7", "M8", "XM"],
    Audi: ["A8", "Q7", "RS"],
  };
  const exteriorOptions = {
    CLE: ["Black", "Grey", "Red"],
    GLE: ["Black", "White", "Red", "Gold"],
    Maybach: ["Black", "Red", "Gold", "Green Water"],
    i7: ["Blue", "Red", "Grey"],
    M8: ["Blue", "White", "Gold"],
    XM: ["Black", "White", "Red"],
    A8: ["Black", "Blue", "Dark Grey", "Light Grey"],
    Q7: ["Black", "Red"],
    RS: ["Black", "White", "Green"],
  };
  const interiorOptions = {
    CLE: ["Camel", "Grey"],
    GLE: ["Black", "Camel"],
    Maybach: ["Camel", "Cognac", "Brown"],
    i7: ["Black/White", "Camel"],
    M8: ["Camel", "Sport"],
    XM: ["White", "Orange"],
    A8: ["Black", "Camel", "Grey"],
    Q7: ["Black", "Camel", "Grey"],
    RS: ["Black", "Orange"],
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // Réinitialise le modèle
    setSelectedExterior(""); // Réinitialise l'exterieur
    setSelectedInterior(""); // Réinitialise l'intérieur
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setSelectedExterior(""); // Réinitialise l'exterieur
    setSelectedInterior(""); // Réinitialise l'intérieur
  };

  const currentModelOptions = selectedBrand ? modelOptions[selectedBrand] : [];
  const currentExteriorOptions = selectedModel
    ? exteriorOptions[selectedModel]
    : [];
  const currentInteriorOptions = selectedModel
    ? interiorOptions[selectedModel]
    : [];

  return (
    <div>
      <h1>Car Configurator</h1>

      <label>
        Brand:
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Select a brand</option>
          {brandOptions.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      <label>
        Model:
        <select
          value={selectedModel}
          onChange={handleModelChange}
          disabled={!selectedBrand}>
          <option value="">Select a model</option>
          {currentModelOptions.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </label>

      <label>
        Exterior:
        <select
          value={selectedExterior}
          onChange={(e) => setSelectedExterior(e.target.value)}
          disabled={!selectedModel}>
          <option value="">Select an exterior</option>
          {currentExteriorOptions.map((exterior) => (
            <option key={exterior} value={exterior}>
              {exterior}
            </option>
          ))}
        </select>
      </label>

      <label>
        Interior:
        <select
          value={selectedInterior}
          onChange={(e) => setSelectedInterior(e.target.value)}
          disabled={!selectedModel}>
          <option value="">Select an interior</option>
          {currentInteriorOptions.map((interior) => (
            <option key={interior} value={interior}>
              {interior}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectorConfigurator;
