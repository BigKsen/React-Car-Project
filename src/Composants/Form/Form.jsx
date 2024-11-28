import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate
import { useSelected } from "../../Composants/SelectedContext"; // Import du contexte
import style from "./Form.module.css"; // Import du fichier CSS pour le style

const Form = () => {
  // Récupération des données depuis le contexte
  const {
    selectedBrand,
    selectedModel,
    selectedExterior,
    selectedInterior,
    selectedWheels,
    selectedHighlights,
    modelData,
  } = useSelected();

  // État pour stocker les données du formulaire
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  // Récupération du navigate (hook de redirection)
  const navigate = useNavigate();

  // Le texte à afficher dans l'élément <h1>
  const h2 = `Booking for ${selectedBrand || "Unknown Brand"} ${
    selectedModel || "Unknown Model"
  }`;

  // Fonction pour vérifier si le formulaire est complet
  const isFormValid = () => {
    return firstName && secondName && tel && email;
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Vérifier si tous les champs sont remplis
    if (!firstName || !secondName || !tel || !email) {
      alert("Please fill in all fields."); // Afficher l'alerte
      return; // Ne pas soumettre le formulaire
    }

    // Form data
    const formData = {
      firstName,
      secondName,
      tel,
      email,
    };

    // Selected data
    const selectedData = {
      selectedBrand,
      selectedModel,
      selectedExterior,
      selectedInterior,
      selectedWheels,
      selectedHighlights,
    };

    // Combine all data and wrap with a title
    const dataToSend = {
      title: "BOOKING Request", // Adding the title here
      formData,
      selectedData,
    };

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend), // Send the wrapped data
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      alert("Your data has been submitted successfully!");

      // Navigate to the FINAL page
      navigate("/final", {
        state: {
          formData,
          selectedData,
        },
      });
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  // Fonction pour réinitialiser les champs du formulaire
  const handleReset = () => {
    setFirstName("");
    setSecondName("");
    setTel("");
    setEmail("");
  };

  return (
    <>
      <h2>{h2}</h2>
      <div className={style.formContainer}>
        {/* Affichage des informations sélectionnées à gauche */}
        <div className={style.selectedInfoContainer}>
          <h3>Selected Information:</h3>
          <ul>
            <li>
              <strong>Brand</strong> {selectedBrand || "-"}
            </li>
            <li>
              <strong>Model</strong> {selectedModel || "-"}
            </li>
            <li>
              <strong>Exterior</strong> {selectedExterior || "-"}
            </li>
            <li>
              <strong>Interior</strong> {selectedInterior || "-"}
            </li>
            <li>
              <strong>Wheels</strong> {selectedWheels || "-"}
            </li>
            <li>
              <strong>Highlights</strong> {selectedHighlights || "-"}
            </li>
          </ul>

          {/* Affichage des détails du modèle */}
          <div className={style.modelDetailsContainer}>
            <h3>Model Details:</h3>
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
              <p>No model details available</p>
            )}
          </div>
        </div>

        <div className={style.personalDataContainer}>
          <h3>Personal Data:</h3>
          <form
            onSubmit={handleSubmit}
            className={style.personalDataContainerForm}>
            <div className={style.bookingFormRow}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={style.bookingFormRow}>
              <label htmlFor="secondName">Second Name</label>
              <input
                type="text"
                id="secondName"
                name="secondName"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </div>

            <div className={style.bookingFormRow}>
              <label htmlFor="tel">Telephone</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>

            <div className={style.bookingFormRow}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={style.bookingFormBtns}>
              <button className={style.bookingFormConfirm} type="submit">
                CONFIRM
              </button>
              <button className={style.bookingFormReset} type="button" onClick={handleReset}>
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
