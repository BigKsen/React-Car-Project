import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelected} from "../../Composants/SelectedContext"; // Assurez-vous que vous importez le hook correctement
import SelectorConfigurator from "../../Composants/SelectorConfigurator/SelectorConfigurator";


const Configurator = () => {

    const navigate = useNavigate();
    const {
        selectedBrand,
        selectedModel,
        selectedExterior,
        selectedInterior,
        selectedWheels,
        selectedHighlights,
        setModelData,
        resetAll, // Récupérer la fonction de reset
    } = useSelected();

    // Fonction pour charger les données JSON via l'API
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

            setModelData(relevantFields); // Stocke les données dans le contexte
        } catch (err) {
            console.error("Error fetching model data:", err);
        }
    };

    // Vérification et chargement des données lorsque toutes les options sont sélectionnées
    useEffect(() => {
        if (
            selectedBrand &&
            selectedModel &&
            selectedExterior &&
            selectedInterior &&
            selectedWheels &&
            selectedHighlights
        ) {
            fetchModelData(); // Charger les données sans afficher
        }
    }, [selectedBrand, selectedModel, selectedExterior, selectedInterior, selectedWheels, selectedHighlights]);

    // Fonction pour enregistrer et naviguer
    const handleSave = () => {
        // Log les valeurs avant de vérifier
        console.log("Values before save:", {
            selectedBrand,
            selectedModel,
            selectedExterior,
            selectedInterior,
            selectedWheels,
            selectedHighlights,
        });

        // Vérifiez que toutes les données sont bien définies avant de naviguer
        if (
            selectedBrand &&
            selectedModel &&
            selectedExterior &&
            selectedInterior &&
            selectedWheels &&
            selectedHighlights
        ) {
            // Redirige vers la page Summery
            navigate("/summery");
        } else {
            // Si une des sélections est vide, affichez un message d'erreur
            alert("Please complete all selections before saving!");
        }
    };

    // Fonction pour réinitialiser toutes les sélections et les données
    const handleReset = () => {
        resetAll(); // Appel de la fonction de reset du contexte
    };

    return (
        <div>
            <SelectorConfigurator />
            {/* Boutons Save et Reset */}
            <button onClick={handleSave}>Save</button>
            <button onClick={handleReset}>Reset</button>
            {/* Aucune donnée de modèle n'est affichée ici */}
        </div>
    );
};

export default Configurator;
