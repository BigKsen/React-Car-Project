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

    // Fonction pour gérer la soumission du formulaire et rediriger vers FINAL
    const handleConfirm = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Vous pouvez traiter ici les données du formulaire si nécessaire
        const formData = {
            firstName,
            secondName,
            tel,
            email,
        };

        // Vous pouvez aussi ajouter ces données à un fichier JSON ou les passer via un contexte

        // Redirection vers la page FINAL
        navigate("/final", {
            state: {
                formData,
                selectedBrand,
                selectedModel,
                selectedExterior,
                selectedInterior,
                selectedWheels,
                selectedHighlights,
            },
        });
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

            {/* Affichage de modelData si disponible */}
            <div>
                <h3>Model Details:</h3>
                {modelData ? (
                    <table>
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

            {/* Formulaire */}
            <form onSubmit={handleConfirm}>
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
                <button type="reset">RESET</button>
            </form>
        </div>
    );
};

export default Form;
