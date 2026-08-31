import React from "react";
import "./style.css";

import wifiIcon from "../../../assets/icons/amenities/wifi.png";
import acIcon from "../../../assets/icons/amenities/ac.png";
import restaurantIcon from "../../../assets/icons/amenities/restaurant.png";
import conciergeIcon from "../../../assets/icons/amenities/concierge.png";
import housekeepingIcon from "../../../assets/icons/amenities/housekeeping.png";
import parkingIcon from "../../../assets/icons/amenities/parking.png";

const amenities = [
  {
    title: "Free Wi‑Fi",
    description: "Fast internet across rooms and public areas.",
    icon: "wifi",
  },
  {
    title: "Air Conditioned Rooms",
    description: "Cool, comfortable stays in every season.",
    icon: "ac",
  },
  {
    title: "On-Site Restaurant",
    description: "Fresh dining without leaving the property.",
    icon: "restaurant",
  },
  {
    title: "24/7 Concierge",
    description: "Support anytime for a smooth stay experience.",
    icon: "concierge",
  },
  {
    title: "Daily Housekeeping",
    description: "Well-maintained rooms with daily care.",
    icon: "housekeeping",
  },
  {
    title: "Secure Parking",
    description: "Safe and convenient parking for guests.",
    icon: "parking",
  },
];

const iconMap = {
  wifi: wifiIcon,
  ac: acIcon,
  restaurant: restaurantIcon,
  concierge: conciergeIcon,
  housekeeping: housekeepingIcon,
  parking: parkingIcon,
};

export default function AmenitiesSection() {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-section__container">
        <div className="amenities-section__header">
          <p className="amenities-section__eyebrow">Amenities</p>
          <h2 className="amenities-section__title">Everything You Need for a Relaxing Stay</h2>
          <p className="amenities-section__description">
            Thoughtful comforts, essential services, and premium conveniences designed to make every
            stay smooth, secure, and comfortable.
          </p>
        </div>

        <div className="amenities-section__cards">
          {amenities.map((item, index) => (
            <article className="amenity-card" key={`${item.title}-${index}`}>
              <div className="amenity-card__icon">
                <img src={iconMap[item.icon]} alt={item.title} draggable="false" />
              </div>

              <div className="amenity-card__body">
                <h3 className="amenity-card__title">{item.title}</h3>
                <p className="amenity-card__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}