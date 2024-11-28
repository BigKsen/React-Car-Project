import React, { useState } from "react";
import { useSelected } from "../SelectedContext";
import style from "./SelectorConfigurator.module.css";

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
    selectedWheels, // Nouveau state pour les jantes
    setSelectedWheels, // Nouveau setter pour les jantes
    selectedHighlights, // Nouveau state pour les phares
    setSelectedHighlights, // Nouveau setter pour les phares
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

  // Options pour les jantes et les phares
  const wheelOptions = ['20"', '21"', '22"'];
  const highlightOptions = ["HID Xenon", "LED", "Matrix LED", "Laser"];

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // Réinitialise le modèle
    setSelectedExterior(""); // Réinitialise l'exterieur
    setSelectedInterior(""); // Réinitialise l'intérieur
    setSelectedWheels(""); // Réinitialise les jantes
    setSelectedHighlights(""); // Réinitialise les phares
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setSelectedExterior(""); // Réinitialise l'exterieur
    setSelectedInterior(""); // Réinitialise l'intérieur
    setSelectedWheels(""); // Réinitialise les jantes
    setSelectedHighlights(""); // Réinitialise les phares
  };

  const currentModelOptions = selectedBrand ? modelOptions[selectedBrand] : [];
  const currentExteriorOptions = selectedModel
    ? exteriorOptions[selectedModel]
    : [];
  const currentInteriorOptions = selectedModel
    ? interiorOptions[selectedModel]
    : [];

  return (
    <div className={style.carConfiguratorMain}>
      <div className={style.carConfigurator}>
        <div className={style.formRow}>
          <label htmlFor="brand">Brand</label>
          <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
            <option value="">Select a brand</option>
            {brandOptions.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className={style.formRow}>
          <label htmlFor="model">Model</label>
          <select
            id="model"
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
        </div>

        <div className={style.formRow}>
          <label htmlFor="exterior">Exterior</label>
          <select
            id="exterior"
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
        </div>

        <div className={style.formRow}>
          <label htmlFor="interior">Interior</label>
          <select
            id="interior"
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
        </div>

        <div className={style.formRow}>
          <label htmlFor="wheels">Wheels</label>
          <select
            id="wheels"
            value={selectedWheels}
            onChange={(e) => setSelectedWheels(e.target.value)}
            disabled={!selectedModel}>
            <option value="">Select wheel size</option>
            {wheelOptions.map((wheel) => (
              <option key={wheel} value={wheel}>
                {wheel}
              </option>
            ))}
          </select>
        </div>

        <div className={style.formRow}>
          <label htmlFor="highlights">Highlights</label>
          <select
            id="highlights"
            value={selectedHighlights}
            onChange={(e) => setSelectedHighlights(e.target.value)}
            disabled={!selectedModel}>
            <option value="">Select headlight type</option>
            {highlightOptions.map((highlight) => (
              <option key={highlight} value={highlight}>
                {highlight}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectorConfigurator;
