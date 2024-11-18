import React from "react";
import style from "./Summery.module.css";
import {useSelected} from "../../Composants/SelectedContext"; // Import du contexte

const Summery = () => {
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

    return (
        <div>
            <div>
                <p>Img ThreJS</p>
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

            <button className={style.bookButton}>BOOK</button>
        </div>
    );
};

export default Summery;