"use client"
import React from "react";
import {
  Stethoscope,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Stethoscope className="footer-brand-logo" />
              <span className="footer-brand-title">MediAssist AI</span>
            </div>
            <p className="footer-description">
              Empowering healthcare decisions with artificial intelligence and
              personalized medical guidance.
            </p>
            <div className="footer-socials">
              <a href="#">
                <Facebook className="social-icon" />
              </a>
              <a href="#">
                <Twitter className="social-icon" />
              </a>
              <a href="#">
                <Linkedin className="social-icon" />
              </a>
              <a href="#">
                <Instagram className="social-icon" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#chatbot">Consultation</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Services</h3>
            <ul className="footer-services">
              <li>Symptom Analysis</li>
              <li>Department Recommendation</li>
              <li>Treatment Guidance</li>
              <li>Health Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Legal</h3>
            <ul className="footer-legal">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Medical Disclaimer</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-text">
              © 2024 MediAssist AI. All rights reserved.
            </p>
            <p className="footer-text">
              <strong>Medical Disclaimer:</strong> This AI system is for
              informational purposes only. Always consult with qualified
              healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
