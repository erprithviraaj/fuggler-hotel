import React from "react";
import "./style.css";

import cityCenterImg from "../../../assets/images/nearby/city-center.jpg";
import railwayStationImg from "../../../assets/images/nearby/railway-station.jpg";
import localMarketImg from "../../../assets/images/nearby/local-market.jpg";
import popularTempleImg from "../../../assets/images/nearby/popular-temple.jpg";
import busStandImg from "../../../assets/images/nearby/bus-stand.jpg";
import lakeViewImg from "../../../assets/images/nearby/lake-view.jpg";

const nearbyPlaces = [
  {
    name: "City Center",
    distance: "1.2 km",
    time: "5 min",
    category: "Shopping",
    note: "Best for cafes, stores, and daily essentials.",
    image: cityCenterImg,
  },
  {
    name: "Railway Station",
    distance: "2.8 km",
    time: "10 min",
    category: "Transport",
    note: "Easy access for arrivals and departures.",
    image: railwayStationImg,
  },
  {
    name: "Local Market",
    distance: "900 m",
    time: "4 min",
    category: "Market",
    note: "Ideal for street food and local shopping.",
    image: localMarketImg,
  },
  {
    name: "Popular Temple",
    distance: "1.5 km",
    time: "6 min",
    category: "Attraction",
    note: "A peaceful and well-known nearby landmark.",
    image: popularTempleImg,
  },
  {
    name: "Bus Stand",
    distance: "2.1 km",
    time: "8 min",
    category: "Transport",
    note: "Convenient for local and intercity travel.",
    image: busStandImg,
  },
  {
    name: "Lake View Park",
    distance: "3.4 km",
    time: "12 min",
    category: "Leisure",
    note: "Perfect for evening walks and relaxing views.",
    image: lakeViewImg,
  },
];

export default function NearbyPlacesSection() {
  return (
    <section className="nearby-section" id="nearby-places">
      <div className="nearby-section__container">
        <header className="nearby-section__header">
          <p className="nearby-section__eyebrow">Around Fuggler</p>
          <h2 className="nearby-section__title">Nearby Places</h2>
          <p className="nearby-section__description">
            Explore popular spots, transport points, and local attractions close
            to the hotel for a smoother and more convenient stay.
          </p>
        </header>

        <div className="nearby-section__grid">
          {nearbyPlaces.map((place, index) => (
            <article className="nearby-card" key={index}>
              <div className="nearby-card__imageWrap">
                <img
                  src={place.image}
                  alt={place.name}
                  className="nearby-card__image"
                />
              </div>

              <div className="nearby-card__content">
                <div className="nearby-card__top">
                  <div className="nearby-card__headingRow">
                    <h3 className="nearby-card__name">{place.name}</h3>
                    <span className="nearby-card__badge">{place.category}</span>
                  </div>

                  <div className="nearby-card__meta">
                    <span>{place.distance}</span>
                    <span className="nearby-card__dot" aria-hidden="true" />
                    <span>{place.time}</span>
                  </div>

                  <p className="nearby-card__note">{place.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}