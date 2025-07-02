'use client'
import React from "react";
import "./hero.css";

export default function HeroSection (){
  const scrollToChatbot = () => {
    const element = document.getElementById("chatbot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                Your AI Medical
                <span className="hero-title-highlight">Assistant</span>
              </h1>
              <p className="hero-description">
                Describe your symptoms and get a department suggestion and
                treatment guidance from our advanced AI system
              </p>
            </div>

            <div className="hero-buttons">
              <button onClick={scrollToChatbot} className="hero-button-primary">
                Start Consultation
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hero-button-secondary"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Medical Assistant"
                className="hero-image"
              />
            </div>
            <div className="hero-image-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
