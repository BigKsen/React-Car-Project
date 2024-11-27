import React from "react";
import style from "./Summery.module.css";
import { useNavigate } from "react-router-dom";
import { useSelected } from "../../Composants/SelectedContext"; // Import du contexte

const Summery = () => {
  // Récupération des données depuis le contexte
  const {
    currentImage, // Ajout de l'image actuelle
    selectedBrand,
    selectedModel,
    selectedExterior,
    selectedInterior,
    selectedWheels,
    selectedHighlights,
    modelData,
  } = useSelected();

  // Initialisation du hook useNavigate pour la redirection
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur le bouton BOOK
  const handleBook = () => {
    navigate("/form"); // Redirige vers la page Form
  };

  return (
    <div className={style.summeryContainer}>
      {/* Ajout de la section pour afficher l'image */}
      <div className={style.imageContainer}>
        {currentImage ? (
          <img
            src={currentImage}
            alt={`${selectedModel} ${selectedExterior}`}
            className={style.carImage}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>

      <table className={style.summaryTable}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Exterior</th>
            <th>Interior</th>
            <th>Wheels</th>
            <th>Highlights</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{selectedBrand || "-"}</td>
            <td>{selectedModel || "-"}</td>
            <td>{selectedExterior || "-"}</td>
            <td>{selectedInterior || "-"}</td>
            <td>{selectedWheels || "-"}</td>
            <td>{selectedHighlights || "-"}</td>
            <td>
              {modelData ? (
                <table className={style.detailsTable}>
                  <tbody>
                    {Object.entries(modelData).map(([key, value]) => (
                      <tr key={key}>
                        <td>
                          <strong>{key}:</strong>
                        </td>
                        <td>{value || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                "-"
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleBook} className={style.bookButton}>
        BOOK
      </button>
    </div>
  );
};

export default Summery;
