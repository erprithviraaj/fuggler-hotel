import React, { useEffect, useState } from "react";
import "./style.css";

// Add import images properly for Vite production build
import heroImage1 from "../../../assets/images/hero/01-hero-exterior-evening.jpg";
import heroImage2 from "../../../assets/images/hero/02-hero-hotel-front-night.jpg";
import heroImage3 from "../../../assets/images/hero/03-hero-grand-lobby.jpg";
import heroImage4 from "../../../assets/images/hero/04-hero-bedroom-city-view.jpg";
import heroImage5 from "../../../assets/images/hero/05-hero-luxury-bedroom.jpg";
import heroImage6 from "../../../assets/images/hero/06-hero-hotel-entrance.jpg";
import heroImage7 from "../../../assets/images/hero/07-hero-lobby-lounge.jpg";
import heroImage8 from "../../../assets/images/hero/08-hero-premium-suite.jpg";
import heroImage9 from "../../../assets/images/hero/09-hero-executive-suite.jpg";
import heroImage10 from "../../../assets/images/hero/10-hero-luxury-bathroom.jpg";
import heroImage11 from "../../../assets/images/hero/11-hero-hotel-garden.jpg";
import heroImage12 from "../../../assets/images/hero/12-hero-drone-aerial.jpg";

import heroImage13 from "../../../assets/images/hero/13-prasp-inn-drone-city.jpg";
import heroImage14 from "../../../assets/images/hero/14-prasp-inn-drone-evening.jpg";
import heroImage15 from "../../../assets/images/hero/15-prasp-inn-drone-front.jpg";
import heroImage16 from "../../../assets/images/hero/16-prasp-inn-drone-top.jpg";
import heroImage17 from "../../../assets/images/hero/17-prasp-inn-entrance.jpg";
import heroImage18 from "../../../assets/images/hero/18-prasp-inn-evening.jpg";
import heroImage19 from "../../../assets/images/hero/19-prasp-inn-front.jpg";
import heroImage20 from "../../../assets/images/hero/20-prasp-inn-ground.jpg";
import heroImage21 from "../../../assets/images/hero/21-prasp-inn-lobby-lounge.jpg";
import heroImage22 from "../../../assets/images/hero/22-prasp-inn-master-exterior.jpg";
import heroImage23 from "../../../assets/images/hero/23-prasp-inn-night.jpg";

// Card image
import cardImage from "../../../assets/images/hero/card/prasp-inn-drone-evening.jpg";

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  heroImage7,
  heroImage8,
  heroImage9,
  heroImage10,
  heroImage11,
  heroImage12,
  heroImage13,
  heroImage14,
  heroImage15,
  heroImage16,
  heroImage17,
  heroImage18,
  heroImage19,
  heroImage20,
  heroImage21,
  heroImage22,
  heroImage23,
];

const heroStats = [
  { value: "120+", label: "Luxury Rooms" },
  { value: "4.9/5", label: "Guest Rating" },
  { value: "24/7", label: "Concierge Service" },
  { value: "Free", label: "Breakfast Included" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-section__slideshow">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-section__slide ${
              index === currentSlide ? "hero-section__slide--active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-section__overlay" />

      <div className="hero-section__container">
        <div className="hero-section__content">
          <p className="hero-section__subtitle">Welcome to Fuggler Hotel</p>

          <h1 className="hero-section__title">
            Stay Somewhere Worth Remembering
          </h1>

          <p className="hero-section__text">
            Experience comfort, boutique ambiance, peaceful retreat, modern
            amenities, and warm hospitality in the heart of your perfect getaway.
          </p>

          <div className="hero-section__actions">
            <a
              href="#booking"
              className="hero-section__button hero-section__button--primary"
            >
              Book Now
            </a>
            <a
              href="#rooms"
              className="hero-section__button hero-section__button--secondary"
            >
              Explore Rooms
            </a>
          </div>
        </div>

        <div className="hero-section__visual">
          <div className="hero-section__card">
            <img
              src={cardImage}
              alt="Fuggler Hotel aerial view"
              className="hero-section__card-image"
            />

            <div className="hero-section__card-body">
              <p className="hero-section__card-label">Luxury Stay</p>
              <h2 className="hero-section__card-title">
                Elegant rooms, premium service
              </h2>
              <p className="hero-section__card-text">
                Relax in beautifully designed spaces created for comfort, style,
                and unforgettable moments.
              </p>

              <div className="hero-section__stats">
                {heroStats.map((stat, index) => (
                  <div key={index} className="hero-section__stat">
                    <span className="hero-section__stat-value">{stat.value}</span>
                    <span className="hero-section__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}