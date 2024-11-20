import React, {useState} from "react";
import {useNavigate} from "react-router-dom"; // Import du hook useNavigate
import {useSelected} from "../../Composants/SelectedContext"; // Import du contexte

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
    const h1 = `Booking for ${selectedBrand || "Unknown Brand"} ${selectedModel || "Unknown Model"}`;

    // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
      e.preventDefault(); // Empêche le rechargement de la page

      // Données du formulaire
      const formData = {
          firstName,
          secondName,
          tel,
          email,
      };

      // Données sélectionnées
      const selectedData = {
          selectedBrand,
          selectedModel,
          selectedExterior,
          selectedInterior,
          selectedWheels,
          selectedHighlights,
      };

      // Fusionner formData et selectedData dans un seul objet
      const dataToSend = {
          ...formData,
          ...selectedData,
      };

      try {
          // Envoi des données au backend
          const response = await fetch("http://localhost:8000/users", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(dataToSend),
          });

          if (!response.ok) {
              throw new Error("Failed to save data");
          }

          alert("Data saved successfully!");

          // Redirection vers la page FINAL
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
        <div>
            <h1>{h1}</h1>

            {/* Affichage des informations sélectionnées */}
            <div>
                <h3>Selected Information:</h3>
                <ul>
                    <li>
                        <strong>Brand:</strong> {selectedBrand || "-"}
                    </li>
                    <li>
                        <strong>Model:</strong> {selectedModel || "-"}
                    </li>
                    <li>
                        <strong>Exterior:</strong> {selectedExterior || "-"}
                    </li>
                    <li>
                        <strong>Interior:</strong> {selectedInterior || "-"}
                    </li>
                    <li>
                        <strong>Wheels:</strong> {selectedWheels || "-"}
                    </li>
                    <li>
                        <strong>Highlights:</strong> {selectedHighlights || "-"}
                    </li>
                </ul>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="secondName">Second Name</label>
                <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                />

                <label htmlFor="tel">Telephone</label>
                <input type="tel" id="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="submit">CONFIRM</button>
                <button type="button" onClick={handleReset}>
                    RESET
                </button>
            </form>
        </div>
    );
};

export default Form;
