"use client";
import React, { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import "./chatbot.css";

interface AnalysisResult {
  department: string;
  answer: string;
  treatment: string[];
}

interface Notification {
  type: "success" | "error" | "info";
  title: string;
  message: string;
}

export const ChatbotSection = () => {
  const [symptoms, setSymptoms] = useState("");
  const [ageGroup, setAgeGroup] = useState(0);
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (note: Notification) => {
    setNotification(note);
    setTimeout(() => setNotification(null), 5000); // auto-hide after 5 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!symptoms.trim() || !ageGroup || !gender) {
      showNotification({
        type: "error",
        title: "Missing Information",
        message: "Please fill in all fields before submitting.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms,
          ageGroup,
          gender
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze symptoms");
      }

      const data = await response.json();
      setResult(data);

      showNotification({
        type: "success",
        title: "Analysis Complete",
        message: "Your symptoms have been analyzed successfully.",
      });
    } catch (error) {
      console.log("Using mock data for demo");
      setResult({
        department: "Cardiology - Chest Pain",
        answer:
          "Based on your symptoms of chest pain and shortness of breath, our AI recommends consultation with a cardiologist. These symptoms could indicate various cardiac conditions that require professional evaluation.",
        treatment: [
          "Rest and avoid strenuous activities",
          "Take prescribed medications as directed",
          "Monitor blood pressure regularly",
          "Follow up with a cardiologist within 48 hours",
          "Seek immediate emergency care if symptoms worsen",
        ],
      });

      showNotification({
        type: "info",
        title: "Demo Mode",
        message: "Showing sample analysis result.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="chatbot-section">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h2 className="chatbot-title">Medical Consultation Assistant</h2>
          <p className="chatbot-subtitle">
            Describe your symptoms for personalized medical guidance
          </p>
        </div>

        {/* Notification */}
        {notification && (
          <div className={`notification ${notification.type}`}>
            <strong>{notification.title}</strong>: {notification.message}
          </div>
        )}

        <div className="chatbot-card">
          <form onSubmit={handleSubmit} className="chatbot-form">
            <div className="form-group">
              <label htmlFor="symptoms" className="form-label">
                Describe Your Symptoms
              </label>
              <div className="textarea-container">
                <textarea
                  id="symptoms"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Please describe your symptoms in detail..."
                  rows={4}
                  className="form-textarea"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="ageGroup" className="form-label">
                  Age Group
                </label>
                <input
                  type="number"
                  name=""
                  id="ageGroup"
                  onChange={(e) => setAgeGroup(Number(e.target.value))}
                  className="form-select"
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="submit-button"
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Send className="submit-icon" />
                  <span>Analyze Symptoms</span>
                </>
              )}
            </button>
          </form>

          {result && (
            <div className="result-container">
              <div className="result-header">
                <Bot className="result-icon" />
                <h3 className="result-title">Analysis Result</h3>
              </div>

              <div className="result-content">
                <div>
                  <h4 className="result-section-title">
                    Recommended Department:
                  </h4>
                  <p className="result-department">{result.department}</p>
                </div>

                <div>
                  <h4 className="result-section-title">Analysis:</h4>
                  <p className="result-analysis">{result.answer}</p>
                </div>

                <div>
                  <h4 className="result-section-title">
                    Recommended Treatment:
                  </h4>
                  <ul className="result-treatment-list">
                    {result.treatment.map((item, index) => (
                      <li key={index} className="result-treatment-item">
                        <span className="result-bullet">•</span>
                        <span className="result-treatment-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="disclaimer">
                <p className="disclaimer-text">
                  <strong>Disclaimer:</strong> This AI analysis is for
                  informational purposes only. Please consult with a qualified
                  healthcare professional for proper medical diagnosis and
                  treatment.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
