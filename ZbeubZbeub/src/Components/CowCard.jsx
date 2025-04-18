import "./CowCard.css";
import { useNavigate } from "react-router-dom";

export default function CowCard({
  id,
  pictureUrl,
  name,
  country,
  region,
  classification,
  coat,
  size,
}) {
  const navigate = useNavigate();

  // Déterminer la classe du badge en fonction de la classification
  const getBadgeClass = () => {
    if (classification.includes("laitière")) return "milk";
    if (classification.includes("viande")) return "meat";
    if (classification.includes("mixte")) return "mixed";
    if (
      classification.includes("attelage") ||
      classification.includes("transport")
    )
      return "utility";
    return "utility"; // Catégorie "autre" par défaut si non classé
  };

  return (
    <div
      id="cow-card"
      onClick={() => navigate(`/cow/${id}`)}
      style={{
        cursor: "pointer",
      }}
    >
      <img id="cow-picture" src={pictureUrl} alt={name} />

      <div className={`classification-badge ${getBadgeClass()}`}>
        {classification}
      </div>

      <div id="cow-description">
        <h3>{name}</h3>
        {country && (
          <p className="cow-description-line">
            <strong>Pays:</strong> {country}
          </p>
        )}
        {region && (
          <p className="cow-description-line">
            <strong>Région:</strong> {region}
          </p>
        )}
        {coat && (
          <p className="cow-description-line">
            <strong>Robe:</strong> {coat}
          </p>
        )}
        {size && (
          <p className="cow-description-line">
            <strong>Taille:</strong> {size}
          </p>
        )}
      </div>
    </div>
  );
}
