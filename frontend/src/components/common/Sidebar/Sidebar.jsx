import React from "react";
import "./style.css";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`sidebar-backdrop ${open ? "sidebar-backdrop--show" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        {/* Header Section */}
        <div className="sidebar__header">
          <a href="#home" className="sidebar__brand" onClick={onClose}>
            <span className="sidebar__brand-box">
              <img
                src="/src/assets/logos/fuggler-logo.png"
                alt="Fuggler Logo"
                className="sidebar__brand-logo"
              />
            </span>
            <h2 className="sidebar__title">Fuggler</h2>
          </a>

          <button
            type="button"
            className="sidebar__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Links Section */}
        <nav className="sidebar__nav">
          <a href="#home" className="sidebar__link" onClick={onClose}>
            Home
          </a>
          <a href="#rooms" className="sidebar__link" onClick={onClose}>
            Rooms
          </a>
          <a href="#gallery" className="sidebar__link" onClick={onClose}>
            Gallery
          </a>
          <a href="#gallery" className="sidebar__link" onClick={onClose}>
            Resturant
          </a>
          <a href="#gallery" className="sidebar__link" onClick={onClose}>
            Testimonials
          </a>
          <a href="#gallery" className="sidebar__link" onClick={onClose}>
            Amenities
          </a>
          <a href="#about" className="sidebar__link" onClick={onClose}>
            About Us
          </a>
          <a href="#contact" className="sidebar__link" onClick={onClose}>
            Contact Us
          </a>
        </nav>

        {/* Bottom Button Section */}
        <a href="#booking" className="sidebar__book-btn" onClick={onClose}>
          Book Your Stay
        </a>
      </aside>
    </>
  );
}