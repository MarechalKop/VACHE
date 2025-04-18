// src/Pages/CowDetails.jsx
import { useParams, Link } from "react-router-dom";
import breedsData from "../Data/breedsData";
import haikuData from "../Data/haikuData";
import "./CowDetails.css";

export default function CowDetails() {
  const { id } = useParams();
  const cow = breedsData.find((b) => b.id === parseInt(id));

  if (!cow)
    return (
      <div className="cow-details-container">
        <Link to="/" className="back-button">
          Retour à la galerie
        </Link>
        <div className="cow-details-card">
          <p>Vache introuvable.</p>
        </div>
      </div>
    );

  // Fonction pour obtenir la classe du badge
  const getBadgeClass = () => {
    if (!cow.classification) return "";
    if (cow.classification.includes("laitière")) return "milk";
    if (cow.classification.includes("viande")) return "meat";
    if (cow.classification.includes("mixte")) return "mixed";
    if (
      cow.classification.includes("attelage") ||
      cow.classification.includes("transport")
    )
      return "utility";
    return "utility";
  };

  return (
    <div className="cow-details-container">
      <Link to="/" className="back-button">
        Retour à la galerie
      </Link>

      <div className="cow-details-card">
        <div className="cow-image-container">
          <img
            className="cow-details-image"
            src={cow.pictureUrl}
            alt={cow.name}
          />
          <div className="cow-name-banner">
            <h2>{cow.name}</h2>
          </div>
        </div>

        <div className="cow-info-grid">
          {cow.region && (
            <div className="cow-info-item">
              <span className="cow-info-label">Région</span>
              <span className="cow-info-value">{cow.region}</span>
            </div>
          )}

          {cow.country && (
            <div className="cow-info-item">
              <span className="cow-info-label">Pays</span>
              <span className="cow-info-value">{cow.country}</span>
            </div>
          )}

          {cow.classification && (
            <div className="cow-info-item">
              <span className="cow-info-label">Classification</span>
              <span className="cow-info-value">{cow.classification}</span>
            </div>
          )}

          {cow.coat && (
            <div className="cow-info-item">
              <span className="cow-info-label">Robe</span>
              <span className="cow-info-value">{cow.coat}</span>
            </div>
          )}

          {cow.size && (
            <div className="cow-info-item">
              <span className="cow-info-label">Taille</span>
              <span className="cow-info-value">{cow.size}</span>
            </div>
          )}
        </div>
      </div>

      <div className="haiku-section">
        <h3>Haïku</h3>
        <div className="haiku-content">
          {getHaiku(cow.name)
            .split("\n")
            .map((line, index) => (
              <div key={index} className="haiku-line">
                {line}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function getHaiku(name) {
  return (
    haikuData[name] ||
    "Mystère de la vache\nSes sabots dans la rosée\nEt l'aube qui chante"
  );
}
