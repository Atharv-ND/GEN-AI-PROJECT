"use client";
import React, { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import "./navbar.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <Stethoscope className="logo-icon" />
            <span className="logo-text">Medic AI</span>
          </div>

          <nav className="nav-desktop">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-button"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-button"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-button"
            >
              Contact
            </button>
          </nav>

          <div className="mobile-menu-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
            >
              {isMenuOpen ? (
                <X className="mobile-menu-icon" />
              ) : (
                <Menu className="mobile-menu-icon" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <button
                onClick={() => scrollToSection("home")}
                className="mobile-nav-button"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="mobile-nav-button"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="mobile-nav-button"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
