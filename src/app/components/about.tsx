"use client"
import React from "react";
import { Brain, Database, Zap, Shield } from "lucide-react";
import "./about.css";

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Our advanced AI uses machine learning to analyze your symptoms and provide accurate department recommendations.",
    },
    {
      icon: Database,
      title: "RAG Technology",
      description:
        "Retrieval-Augmented Generation ensures our responses are based on the latest medical knowledge and research.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get immediate guidance on which medical department to consult and preliminary treatment suggestions.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your medical information is processed securely and never stored permanently on our servers.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">How MediAssist AI Works</h2>
          <p className="about-description">
            Our AI-powered medical assistant uses cutting-edge technology to
            analyze your symptoms and provide personalized healthcare guidance,
            helping you make informed decisions about your health.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                <feature.icon className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-stack-section">
          <div className="tech-stack-grid">
            <div>
              <h3 className="tech-stack-title">Advanced Technology Stack</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <div className="tech-bullet"></div>
                  <div>
                    <span className="tech-name">Flask Backend:</span>
                    <span className="tech-description">
                      Robust Python web framework for API development
                    </span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="tech-bullet"></div>
                  <div>
                    <span className="tech-name">LangChain:</span>
                    <span className="tech-description">
                      Advanced language model orchestration
                    </span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="tech-bullet"></div>
                  <div>
                    <span className="tech-name">SentenceTransformers:</span>
                    <span className="tech-description">
                      State-of-the-art semantic similarity
                    </span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="tech-bullet"></div>
                  <div>
                    <span className="tech-name">Gemini API:</span>
                    <span className="tech-description">
                      Google's powerful AI for medical analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-image">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Medical Technology"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
