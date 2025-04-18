import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Gallery from "./Pages/Gallery";
import CowDetails from "./Pages/CowDetails";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav className="main-nav">
            <div className="nav-logo">Une vache, un haïku</div>
            <div className="nav-links">
              <Link to="/" className="nav-button">
                Galerie
              </Link>
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/cow/:id" element={<CowDetails />} />
            <Route
              path="*"
              element={
                <div className="error-page">
                  <h2>Page non trouvée</h2>
                  <Link to="/" className="nav-button">
                    Retour à la galerie
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="main-footer">
          <p>© 2025 Vach'App - Projet de Programmation Web 3</p>
        </footer>
      </div>
    </Router>
  );
}
