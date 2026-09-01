import React from "react";
import "./style.css";

import logo from "../../../assets/logos/logo.png";
import instagramIcon from "../../../assets/icons/social/instagram.png";
import facebookIcon from "../../../assets/icons/social/facebook.png";
import youtubeIcon from "../../../assets/icons/social/youtube.png";
import xIcon from "../../../assets/icons/social/x.png";
import whatsappIcon from "../../../assets/icons/social/whatsapp.png";

export default function FooterSection() {
  const quickLinks = [
    { label: "Home", url: "/" },
    { label: "Rooms", url: "/rooms" },
    { label: "Offers", url: "/offers" },
    { label: "Gallery", url: "/gallery" },
    { label: "Amenities", url: "/amenities" },
    { label: "Restaurant", url: "/restaurant" },
  ];

  const usefulLinks = [
    { label: "About Us", url: "/about" },
    { label: "Nearby Places", url: "/nearby-places" },
    { label: "Book Now", url: "/booking" },
    { label: "Contact", url: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms & Conditions", url: "/terms-and-conditions" },
    { label: "Cancellation Policy", url: "/cancellation-policy" },
    { label: "Disclaimer", url: "/disclaimer" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/erprithviraaj/",
      icon: instagramIcon,
      className: "footer-instagram",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/erprithviraaj",
      icon: facebookIcon,
      className: "footer-facebook",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@erprithviraaj",
      icon: youtubeIcon,
      className: "footer-youtube",
    },
    {
      label: "X",
      url: "https://x.com/erprithviraaj",
      icon: xIcon,
      className: "footer-x",
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/919034018902",
      icon: whatsappIcon,
      className: "footer-whatsapp",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="common-container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <div className="footer-brand-logo">
                <img src={logo} alt="Fuggler Hotel" loading="lazy" />
              </div>

              <div className="footer-brand-title">
                <h3>Fuggler Hotel</h3>
                <p>
                  Luxury stays, elegant rooms, on-site dining, and 24/7 concierge
                  service for a comfortable hotel experience.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <div className="footer-links">
              {usefulLinks.map((link) => (
                <a key={link.label} href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <div className="footer-links">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col footer-contact-col">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <a className="footer-contact-item" href="tel:+919034018902">
                <strong>Phone:</strong>
                <span>+91 90340 18902</span>
              </a>

              <a
                className="footer-contact-item"
                href="mailto:erprithviraaj@gmail.com"
              >
                <strong>Email:</strong>
                <span>erprithviraaj@gmail.com</span>
              </a>

              <a
                className="footer-contact-item"
                href="https://maps.app.goo.gl/MrQbvjjFe8GmJRtZ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Address:</strong>
                <span>Miranpur Pinvat, LKO, UP 226401</span>
              </a>
            </div>

            <div className="footer-social">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  className={item.className}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                >
                  <img src={item.icon} alt={item.label} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Er. Prithvi Raaj. All Rights Reserved.</p>
          <p className="footer-credit">
            Designed &amp; Developed by <strong>Er. Prithvi Raaj</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}