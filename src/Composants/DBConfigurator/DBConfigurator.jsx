import React, { useState } from "react";
import { useSelected } from "../SelectedContext";

function DBConfigurator() {
  const { selectedModel, resetModelData } = useSelected();
  const [modelData, setModelData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchModelData = async () => {
    if (!selectedModel) {
      setError("Please select a model first.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/options");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      const filteredData = data[selectedModel];

      if (!filteredData) {
        throw new Error(`No data found for model: ${selectedModel}`);
      }

      const relevantFields = {
        Brand: filteredData.make,
        Model: filteredData.model,
        Year: filteredData.year,
        Class: filteredData.vclass,
        Engine: filteredData.eng_dscr,
        EMotor: filteredData.evmotor,
        Cylinders: filteredData.cylinders,
        Fuel: filteredData.fueltype1,
        Transmission: filteredData.trany,
        Drive: filteredData.drive,
        ATVtype: filteredData.atvtype,
      };

      setModelData(relevantFields);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    if (!isVisible && !modelData) {
      fetchModelData();
    }
    setIsVisible(!isVisible);
  };

  // Réinitialiser l'état du bouton et les données au reset
  const handleReset = () => {
    resetModelData(); // Réinitialise tout via le contexte
    setIsVisible(false); // Réinitialiser le bouton à son état initial
    setModelData(null); // Réinitialise les données du modèle
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? "Hide Model Info" : "See All Options"}
      </button>

      <button onClick={handleReset}>Reset</button>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isVisible && modelData && (
        <pre>
          {Object.entries(modelData)
            .map(([key, value]) => `${key}: ${value === null ? "-" : value}`)
            .join("\n")}
        </pre>
      )}
    </div>
  );
}

export default DBConfigurator;
