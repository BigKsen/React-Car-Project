import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelected } from "../../Composants/SelectedContext";
import SelectorConfigurator from "../../Composants/SelectorConfigurator/SelectorConfigurator";
import style from "./Configurator.module.css";
import CLEBlack from "../../assets/images/Mercedes/CLE/Ready/Resized/CLEBlack.avif";
import CLEGrey from "../../assets/images/Mercedes/CLE/Ready/Resized/CLEGrey.avif";
import CLERed from "../../assets/images/Mercedes/CLE/Ready/Resized/CLERed.avif";
import GLEBlack from "../../assets/images/Mercedes/GLE/Ready/Resized/GLEBlack.avif";
import GLEWhite from "../../assets/images/Mercedes/GLE/Ready/Resized/GLEWhite.avif";
import GLERed from "../../assets/images/Mercedes/GLE/Ready/Resized/GLERed.avif";
import GLEGold from "../../assets/images/Mercedes/GLE/Ready/Resized/GLEGold.avif";
import MaybachBlack from "../../assets/images/Mercedes/Maybach/Ready/Resized/MaybachBlack.avif";
import MaybachRed from "../../assets/images/Mercedes/Maybach/Ready/Resized/MaybachRed.avif";
import MaybachGold from "../../assets/images/Mercedes/Maybach/Ready/Resized/MaybachGold.avif";
import MaybachGreenWater from "../../assets/images/Mercedes/Maybach/Ready/Resized/MaybachGreenWater.avif";
import A8Black from "../../assets/images/Audi/A8/Ready/Resized/AudiA8Black.avif";
import A8Blue from "../../assets/images/Audi/A8/Ready/Resized/AudiA8Blue.avif";
import A8DarkGrey from "../../assets/images/Audi/A8/Ready/Resized/AudiA8DarkGrey.avif";
import A8LightGrey from "../../assets/images/Audi/A8/Ready/Resized/AudiA8LightGrey.avif";
import Q7Black from "../../assets/images/Audi/Q7/Ready/Resized/AudiQ7Black.avif";
import Q7Red from "../../assets/images/Audi/Q7/Ready/Resized/AudiQ7Red.avif";
import RSBlack from "../../assets/images/Audi/RS/Ready/Resized/AudiRSBlack.avif";
import RSGreen from "../../assets/images/Audi/RS/Ready/Resized/AudiRSGreen.avif";
import RSWhite from "../../assets/images/Audi/RS/Ready/Resized/AudiRSWhite.avif";
import i7Blue from "../../assets/images/BMW/I7/Ready/Resized/BMWi7BlueCameleon.avif";
import i7Red from "../../assets/images/BMW/I7/Ready/Resized/BMW i7Red.avif";
import i7Grey from "../../assets/images/BMW/I7/Ready/Resized/BMW i7Grey.avif";
import M8Blue from "../../assets/images/BMW/M8/Ready/Resized/BMWM8BlueNight.avif";
import M8White from "../../assets/images/BMW/M8/Ready/Resized/BMWM8White.avif";
import M8Gold from "../../assets/images/BMW/M8/Ready/Resized/BMWM8Gold.avif";
import XMBlack from "../../assets/images/BMW/XM/Ready/Resized/BMWXMBlack.avif";
import XMWhite from "../../assets/images/BMW/XM/Ready/Resized/BMWXMWhite.avif";
import XMRed from "../../assets/images/BMW/XM/Ready/Resized/BMWXMRed.avif";
import DefaultImage from "../../assets/images/podium.avif";

const Configurator = () => {
  const navigate = useNavigate();
  const {
    setCurrentImage, // Récupération du setter pour l'image
    selectedBrand,
    selectedModel,
    selectedExterior,
    selectedInterior,
    selectedWheels,
    selectedHighlights,
    setModelData,
    resetAll,
  } = useSelected();

  // Mapping des images en fonction du modèle et de l'extérieur
  const modelExteriorImages = {
    CLE: {
      Black: CLEBlack,
      Grey: CLEGrey,
      Red: CLERed,
    },
    GLE: {
      Black: GLEBlack,
      White: GLEWhite,
      Red: GLERed,
      Gold: GLEGold,
    },
    Maybach: {
      Black: MaybachBlack,
      Red: MaybachRed,
      Gold: MaybachGold,
      "Green Water": MaybachGreenWater,
    },

    A8: {
      Black: A8Black,
      Blue: A8Blue,
      "Light Grey": A8LightGrey,
      "Dark Grey": A8DarkGrey,
    },

    Q7: {
      Black: Q7Black,
      Red: Q7Red,
    },

    RS: {
      Black: RSBlack,
      Green: RSGreen,
      White: RSWhite,
    },
    i7: {
      Blue: i7Blue,
      Red: i7Red,
      Grey: i7Grey,
    },
    M8: {
      Blue: M8Blue,
      White: M8White,
      Gold: M8Gold,
    },
    XM: {
      Black: XMBlack,
      White: XMWhite,
      Red: XMRed,
    },
  };

  // Récupère l'image actuelle en fonction du modèle et de l'extérieur
  const currentImage =
    (modelExteriorImages[selectedModel] &&
      modelExteriorImages[selectedModel][selectedExterior]) ||
    DefaultImage; // Image par défaut si aucun extérieur sélectionné

  // Synchroniser l'image dans le contexte dès que selectedModel ou selectedExterior change
  useEffect(() => {
    setCurrentImage(currentImage); // Met à jour l'image dans le contexte global
  }, [currentImage, setCurrentImage]); // Dépendances

  const fetchModelData = async () => {
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
        Brand: filteredData.make || "-",
        Model: filteredData.model || "-",
        Year: filteredData.year || "-",
        Class: filteredData.vclass || "-",
        Engine: filteredData.eng_dscr || "-",
        EMotor: filteredData.evmotor || "-",
        Cylinders: filteredData.cylinders || "-",
        Fuel: filteredData.fueltype1 || "-",
        Transmission: filteredData.trany || "-",
        Drive: filteredData.drive || "-",
        ATVtype: filteredData.atvtype || "-",
      };

      setModelData(relevantFields);
    } catch (err) {
      console.error("Error fetching model data:", err);
    }
  };

  useEffect(() => {
    if (
      selectedBrand &&
      selectedModel &&
      selectedExterior &&
      selectedInterior &&
      selectedWheels &&
      selectedHighlights
    ) {
      fetchModelData();
    }
  }, [
    selectedBrand,
    selectedModel,
    selectedExterior,
    selectedInterior,
    selectedWheels,
    selectedHighlights,
  ]);

  const handleSave = () => {
    if (
      selectedBrand &&
      selectedModel &&
      selectedExterior &&
      selectedInterior &&
      selectedWheels &&
      selectedHighlights
    ) {
      navigate("/summery");
    } else {
      alert("Please complete all selections before saving!");
    }
  };

  const handleReset = () => {
    resetAll();
  };

  return (
    <div className={style.configuratorContainer}>
      <h2>Car Configurator</h2>

      {/* Image dynamique en fonction du modèle et de l'extérieur */}
      <div
        className={style.configuratorImg}
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "20% 65%",
          transition: "0.4s ease-in-out",
        }}></div>

      <SelectorConfigurator />

      <div className={style.carConfiguratorBtns}>
        <button className={style.submitBtn} type="submit" onClick={handleSave}>
          Save
        </button>
        <button className={style.resetBtn} type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Configurator;
