import React from "react";
import "./style.css";

import highlightImage from "../../../assets/images/highlight/13-prasp-inn-drone-city.jpg";

const highlightStats = [
  { value: "120+", label: "Luxury Rooms" },
  { value: "4.9/5", label: "Guest Rating" },
  { value: "24/7", label: "Concierge Service" },
  { value: "On-Site", label: "Restaurant Dining" },
];

export default function HighlightSection() {
  return (
    <section className="highlight-section" id="highlight">
      <div className="highlight-section__container">
        <div className="highlight-section__header">
          <p className="highlight-section__eyebrow">Why Fuggler</p>
          <h2 className="highlight-section__title">Stay, Dine & Unwind</h2>
          <p className="highlight-section__description">
            Fuggler is your complete getaway—comfortable rooms, thoughtful
            24/7 support, and an on-site dining experience made for memorable
            evenings.
          </p>
        </div>

        <div className="highlight-section__content">
          <div className="highlight-section__left">
            <div className="highlight-section__imageWrap">
              <img
                src={highlightImage}
                alt="Fuggler Hotel lounge and hospitality"
                className="highlight-section__image"
                draggable="false"
              />
              <div className="highlight-section__imageOverlay" />
            </div>
          </div>

          <div className="highlight-section__rightColumn">
            <div className="highlight-section__featureCard">
              <p className="highlight-section__featureKicker">Signature Comfort</p>
              <h3 className="highlight-section__featureTitle">
                Quiet luxury, modern convenience
              </h3>
              <p className="highlight-section__featureText">
                Relax in beautifully designed spaces with warm hospitality,
                premium services, and a vibe that feels effortless from check-in
                to checkout.
              </p>

              <div className="highlight-section__featureRow">
                <span className="highlight-section__chip">Peaceful Ambience</span>
                <span className="highlight-section__chip">Warm Hospitality</span>
                <span className="highlight-section__chip">On-Site Dining</span>
              </div>
            </div>

            <div className="highlight-section__right">
              <div className="highlight-section__stats">
                {highlightStats.map((stat, idx) => (
                  <div key={idx} className="highlight-section__stat">
                    <span className="highlight-section__statValue">{stat.value}</span>
                    <span className="highlight-section__statLabel">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="highlight-section__cta">
                <a href="#rooms" className="highlight-section__ctaBtn">
                  Explore Rooms
                </a>
                <a
                  href="#booking"
                  className="highlight-section__ctaBtn highlight-section__ctaBtn--ghost"
                >
                  Check Availability
                </a>
              </div>

              <p className="highlight-section__finePrint">
                Book your stay in minutes—pick your dates, choose your room, and
                enjoy the complete Fuggler experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}