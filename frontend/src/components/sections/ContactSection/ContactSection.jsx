import React from "react";
import "./style.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      {/* Contact Section */}
      <div className="contact-section__content">
        <p className="contact-section__eyebrow">Contact Us</p>
        <h2>Ready to Experience Fuggler Hotel?</h2>
        <p>
          Plan your stay, ask a question, or connect with our team for a personalized booking experience.
        </p>

        <div className="contact-section__actions">
          <button type="button" className="contact-section__primary">
            Book Your Stay
          </button>
          <button type="button" className="contact-section__secondary">
            Send Enquiry
          </button>
        </div>
      </div>

      <div className="contact-section__info">
        {/* Contact Info */}
        <div className="contact-card">
          <strong>Address</strong>
          <span>Fuggler Hotel, City Center, India</span>
        </div>

        <div className="contact-card">
          <strong>Phone</strong>
          <span>+91 98765 43210</span>
        </div>

        <div className="contact-card">
          <strong>Email</strong>
          <span>stay@fugglerhotel.com</span>
        </div>
      </div>
    </section>
  );
}