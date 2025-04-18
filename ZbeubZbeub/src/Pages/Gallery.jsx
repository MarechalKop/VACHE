import React, { useState, useMemo } from "react";
import breedsData from "../Data/breedsData";
import CowCard from "../Components/CowCard";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPatterns, setSelectedPatterns] = useState([]);

  const availablePatterns = ["Unie", "Pie", "Autre"];

  const availableColors = [
    { name: "Rouge", hex: "#ff0000" },
    { name: "Noir", hex: "#000000" },
    { name: "Blanc", hex: "#ffffff" },
    { name: "Brun", hex: "#8b4513" },
    { name: "Gris", hex: "#808080" },
    { name: "Fauve", hex: "#d2691e" },
    { name: "Bleu", hex: "#4682b4" },
  ];

  const toggleColor = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const togglePattern = (pattern) => {
    setSelectedPatterns((prevPatterns) =>
      prevPatterns.includes(pattern)
        ? prevPatterns.filter((p) => p !== pattern)
        : [...prevPatterns, pattern]
    );
  };

  const filteredSortedCows = useMemo(() => {
    try {
      const searchTerm = (search || "").toLowerCase();

      let result = breedsData.filter((cow) => {
        const cowName = (cow.name || "").toLowerCase();
        const cowRegion = (cow.region || "").toLowerCase();
        const cowCountry = (cow.country || "").toLowerCase();

        return (
          cowName.includes(searchTerm) ||
          cowRegion.includes(searchTerm) ||
          cowCountry.includes(searchTerm)
        );
      });

      if (filterType && filterType !== "all") {
        result = result.filter(
          (cow) => cow.classification && cow.classification.includes(filterType)
        );
      }

      if (selectedColors.length > 0) {
        result = result.filter((cow) => {
          if (!cow.coat) return false;
          const cowColors = cow.coat.toLowerCase();
          return selectedColors.some((color) => {
            const colorLower = color.toLowerCase();
            return (
              cowColors.includes(colorLower) ||
              (color === "Blanc" &&
                (cowColors.includes("beige") || cowColors.includes("blanc"))) ||
              (color === "Brun" &&
                (cowColors.includes("acajou") || cowColors.includes("brun")))
            );
          });
        });
      }

      if (selectedPatterns.length > 0) {
        result = result.filter((cow) => {
          if (!cow.coat) return false;
          const cowPattern = cow.coat.toLowerCase();
          return selectedPatterns.some((pattern) => {
            const patternLower = pattern.toLowerCase();
            if (pattern === "Autre") {
              return (
                cowPattern.includes("bringé") ||
                cowPattern.includes("caille") ||
                cowPattern.includes("moucheté")
              );
            }
            return cowPattern.includes(patternLower);
          });
        });
      }

      result = result.sort((a, b) => {
        const nameA = (a.name || "").toLowerCase();
        const nameB = (b.name || "").toLowerCase();
        return nameA.localeCompare(nameB);
      });

      return result;
    } catch (error) {
      console.error("Erreur dans le filtrage:", error);
      return [];
    }
  }, [search, filterType, selectedColors, selectedPatterns]);

  return (
    <div>
      <div id="gallery-options">
        <h1>Galerie des races de vaches</h1>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher une vache, un pays ou une région"
        />

        <label htmlFor="cow-type">Type de vache :</label>
        <select
          id="cow-type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">Toutes</option>
          <option value="Race à viande">Race à viande</option>
          <option value="Race laitière">Race laitière</option>
          <option value="Race mixte">Race mixte</option>
        </select>
      </div>

      <div id="color-filters">
        <h3>Couleurs :</h3>
        <div>
          {availableColors.map((color) => (
            <button
              key={color.name}
              style={{
                backgroundColor: selectedColors.includes(color.name)
                  ? color.hex
                  : "#f6f6f2",
                color:
                  color.name === "Blanc" ||
                  color.name === "Jaune" ||
                  !selectedColors.includes(color.name)
                    ? "#3d3d3d"
                    : "#ffffff",
                border: `2px solid ${color.hex}`,
                opacity: selectedColors.includes(color.name) ? 1 : 0.7,
              }}
              onClick={() => toggleColor(color.name)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      <div id="pattern-filters">
        <h3>Motifs :</h3>
        <div>
          {availablePatterns.map((pattern) => (
            <button
              key={pattern}
              className={selectedPatterns.includes(pattern) ? "selected" : ""}
              onClick={() => togglePattern(pattern)}
            >
              {pattern}
            </button>
          ))}
        </div>
      </div>

      <div id="cow-gallery">
        {filteredSortedCows.length > 0 ? (
          filteredSortedCows.map((cow) => (
            <CowCard
              key={cow.id}
              id={cow.id}
              name={cow.name}
              country={cow.country}
              region={cow.region}
              classification={cow.classification}
              coat={cow.coat}
              size={cow.size}
              pictureUrl={cow.pictureUrl}
            />
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
              padding: "40px",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <p>Aucune vache ne correspond à votre recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}
