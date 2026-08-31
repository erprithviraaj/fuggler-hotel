import React from "react";
import "./style.css";

const nearbyPlaces = [
  {
    name: "City Center",
    distance: "1.2 km",
    time: "5 min",
    category: "Shopping",
    note: "Best for cafes, stores, and daily essentials.",
  },
  {
    name: "Railway Station",
    distance: "2.8 km",
    time: "10 min",
    category: "Transport",
    note: "Easy access for arrivals and departures.",
  },
  {
    name: "Local Market",
    distance: "900 m",
    time: "4 min",
    category: "Market",
    note: "Ideal for street food and local shopping.",
  },
  {
    name: "Popular Temple",
    distance: "1.5 km",
    time: "6 min",
    category: "Attraction",
    note: "A peaceful and well-known nearby landmark.",
  },
  {
    name: "Bus Stand",
    distance: "2.1 km",
    time: "8 min",
    category: "Transport",
    note: "Convenient for local and intercity travel.",
  },
  {
    name: "Park / Lake View",
    distance: "3.4 km",
    time: "12 min",
    category: "Leisure",
    note: "Perfect for evening walks and relaxing views.",
  },
];

export default function NearbyPlacesSection() {
  return (
    <section className="nearby-section" id="nearby-places">
      <div className="nearby-section__container">
        <div className="nearby-section__header">
          <span className="nearby-section__eyebrow">Around Fuggler</span>
          <h2 className="nearby-section__title">Nearby Places</h2>
          <p className="nearby-section__description">
            Explore popular spots, transport points, and local attractions
            close to the hotel for a smoother and more convenient stay.
          </p>
        </div>

        <div className="nearby-section__grid">
          {nearbyPlaces.map((place, index) => (
            <article className="nearby-card" key={index}>
              <div className="nearby-card__top">
                <div className="nearby-card__icon" aria-hidden="true">
                  📍
                </div>
                <span className="nearby-card__tag">{place.category}</span>
              </div>

              <h3 className="nearby-card__name">{place.name}</h3>

              <div className="nearby-card__meta">
                <span>{place.distance}</span>
                <span className="nearby-card__dot" aria-hidden="true"></span>
                <span>{place.time}</span>
              </div>

              <p className="nearby-card__note">{place.note}</p>
            </article>
          ))}
        </div>

        <div className="nearby-section__footer">
          <a href="#map" className="nearby-section__cta">
            View Map
          </a>
        </div>
      </div>
    </section>
  );
}