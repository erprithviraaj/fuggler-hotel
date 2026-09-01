import React from "react";
import "./style.css";

export default function MapSection() {
  return (
    <section className="map-section" id="map">
      <div className="map-section__container">
        <header className="map-section__header">
          <p className="map-section__eyebrow">Find Us Easily</p>
          <h2 className="map-section__title">Map & Location</h2>
          <p className="map-section__description">
            Locate Fuggler Hotel quickly and plan your arrival with nearby
            landmarks and easy directions.
          </p>
        </header>

        <div className="map-section__content">
          <div className="map-section__mapWrap">
            <iframe
              className="map-section__map"
              title="Fuggler Hotel Map"
              src="https://www.google.com/maps?q=26.723806,80.842630&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="map-section__info">
            <div className="map-section__infoCard">
              <div className="map-section__addressRow">
                <div className="map-section__addressText">
                  <h3>Hotel Address</h3>
                  <p>
                    House No. 254, Chandra Shekhar Azad Nagar colony, Miranpur
                    Pinvat, Uttar Pradesh 226401
                  </p>
                </div>

                <a
                  className="map-section__btn map-section__btn--primary"
                  href="https://maps.app.goo.gl/MrQbvjjFe8GmJRtZ7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="map-section__infoCard">
              <h3>Nearby Access</h3>
              <ul className="map-section__list">
                <li>Railway Station: 2.8 km</li>
                <li>Bus Stand: 2.1 km</li>
                <li>City Center: 1.2 km</li>
                <li>Local Market: 900 m</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}