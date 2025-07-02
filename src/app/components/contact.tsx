"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./contact.css";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      setNotification({
        type: "success",
        message: "Message sent! Thank you for contacting us.",
      });

      setTimeout(() => {
        const element = document.querySelector(".notification");
        if (element) element.classList.add("fade-out");
      }, 2000);

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }, 1500);    
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Have questions about MediAssist AI? We're here to help.
          </p>
        </div>

        {/* Notification */}
        {notification && (
          <div
            className={`notification ${
              notification.type === "success"
                ? "notification-success"
                : "notification-error"
            }`}
          >
            {notification.message}
          </div>
        )}

        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon-container">
                    <Phone className="contact-icon" />
                  </div>
                  <div>
                    <p className="contact-method-title">Phone</p>
                    <p className="contact-method-detail">+91 8767101565</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon-container">
                    <Mail className="contact-icon" />
                  </div>
                  <div>
                    <p className="contact-method-title">Email</p>
                    <p className="contact-method-detail">
                      support@medicassist.ai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="office-hours-card">
              <h4 className="office-hours-title">Office Hours</h4>
              <div className="office-hours-list">
                <div className="office-hours-item">
                  <span className="office-hours-day">Monday - Friday</span>
                  <span className="office-hours-time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="office-hours-item">
                  <span className="office-hours-day">Saturday</span>
                  <span className="office-hours-time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="office-hours-item">
                  <span className="office-hours-day">Sunday</span>
                  <span className="office-hours-time">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 className="contact-form-title">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="submit-button-icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
