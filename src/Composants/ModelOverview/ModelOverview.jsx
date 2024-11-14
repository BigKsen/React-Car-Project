import style from "./ModelOverview.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModelOverview = ({
  image,
  alt,
  creationText,
  designText,
  technologyText,
  featuresText,
}) => {
  // states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(null); // Ajout du state pour suivre le tab sélectionné

  // Fonction pour faire défiler les images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 3000); // Changer d'image toutes les 3 secondes

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle à la suppression du composant
  }, [image.length]);

  // Fonction de gestion du clic sur un titre
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName); // Met à jour l'état pour le tab cliqué
  };

  return (
    <>
      <div className={style.mainModelOverview}>
        <div className={style.carImg}>
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={alt}
              className={index === currentIndex ? style.visible : ""}
            />
          ))}
        </div>

        <div className={style.carText}>
          <div className={style.textTitels}>
            {/* Clic sur les titres pour afficher le contenu correspondant */}
            <h2
              className={selectedTab === "creation" ? style.selected : ""}
              onClick={() => handleTabClick("creation")}>
              Création
            </h2>
            <h2
              className={selectedTab === "design" ? style.selected : ""}
              onClick={() => handleTabClick("design")}>
              Design
            </h2>
            <h2
              className={selectedTab === "technology" ? style.selected : ""}
              onClick={() => handleTabClick("technology")}>
              Technology
            </h2>
            <h2
              className={selectedTab === "features" ? style.selected : ""}
              onClick={() => handleTabClick("features")}>
              Key Features
            </h2>
          </div>

          {/* Affichage conditionnel des tabs en fonction de l'état sélectionné */}
          {selectedTab === "creation" && (
            <div className={style.creationTab}>
              <p>{creationText}</p>
            </div>
          )}

          {selectedTab === "design" && (
            <div className={style.designTab}>
              <p>{designText}</p>
            </div>
          )}

          {selectedTab === "technology" && (
            <div className={style.technologyTab}>
              <p>{technologyText}</p>
            </div>
          )}

          {selectedTab === "features" && (
            <div className={style.featuresTab}>
              <p>{featuresText}</p>
            </div>
          )}
        </div>

        <div className={style.overviewconfigureButtonWrapper}>
          <Link to="/configurator">
            <button className={style.overviewConfigureBtn}>Configure</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ModelOverview;
