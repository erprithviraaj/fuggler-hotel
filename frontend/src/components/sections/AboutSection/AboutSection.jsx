import React from "react";
import "./style.css";
import aboutImage from "../../../assets/images/about/about-lobby.jpg";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-section__container">
        <div className="about-section__header">
          <p className="about-section__eyebrow">About Fuggler</p>
          <h2 className="about-section__title">A Stay Designed for Comfort, Style & Ease</h2>
          <p className="about-section__description">
            At Fuggler Hotel, every detail is designed around guest comfort —
            elegant rooms, warm hospitality, and a calm atmosphere that makes
            every stay feel effortless.
          </p>
        </div>

        <div className="about-section__content">
          <div className="about-section__left">
            <div className="about-section__imageWrap">
              <img
                src={aboutImage}
                alt="Fuggler Hotel ambience"
                className="about-section__image"
              />
              <div className="about-section__imageOverlay" />
            </div>
          </div>

          <div className="about-section__right">
            <div className="about-section__stats">
              <div className="about-section__statCard">
                <strong>120+</strong>
                <span>Luxury Rooms</span>
              </div>
              <div className="about-section__statCard">
                <strong>4.9/5</strong>
                <span>Guest Rating</span>
              </div>
              <div className="about-section__statCard">
                <strong>24/7</strong>
                <span>Concierge Service</span>
              </div>
            </div>

            <div className="about-section__text">
              <p>
                Fuggler Hotel blends modern design, refined comfort, and
                personalized service. Here, you will find spacious rooms,
                attentive staff, and an atmosphere that feels peaceful and
                premium from check-in to check-out.
              </p>
              <p>
                Whether you are here for business, a weekend escape, or a family
                trip, Fuggler is designed to make your stay memorable with warm
                hospitality and an on-site dining experience.
              </p>
            </div>

            <div className="about-section__featureGrid">
              <div className="about-section__featureCard">
                <strong>Elegant Rooms</strong>
                <span>Comfortable, spacious, and stylish interiors</span>
              </div>
              <div className="about-section__featureCard">
                <strong>Warm Hospitality</strong>
                <span>Friendly service that feels personal and attentive</span>
              </div>
              <div className="about-section__featureCard">
                <strong>On-Site Restaurant</strong>
                <span>Convenient dining with a premium guest experience</span>
              </div>
              <div className="about-section__featureCard">
                <strong>24/7 Concierge</strong>
                <span>Support anytime for a smooth and stress-free stay</span>
              </div>
            </div>

            <div className="about-section__ctaGroup">
              <a href="#rooms" className="about-section__btn about-section__btn--primary">
                Explore Rooms
              </a>
              <a href="#booking" className="about-section__btn about-section__btn--secondary">
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}