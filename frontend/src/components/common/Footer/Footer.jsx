import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Footer Section */}
      <div className="footer__brand">Fuggler Hotel</div>
      <p className="footer__text">
        Elegant stays, thoughtful service, and memorable hospitality.
      </p>
      <p className="footer__copy">© 2026 Fuggler Hotel. All rights reserved.</p>
    </footer>
  );
}