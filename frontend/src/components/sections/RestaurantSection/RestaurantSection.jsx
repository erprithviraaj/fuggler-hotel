import React from "react";
import "./style.css";
import restaurantImg from "../../../assets/images/restaurant/restaurant-main.jpg";

const RestaurantSection = () => {
  const features = [
    {
      title: "Fresh Ingredients",
      text: "Daily-prepared meals with quality ingredients and rich flavors.",
    },
    {
      title: "Multi-Cuisine",
      text: "Enjoy Indian, Continental, and popular comfort food options.",
    },
    {
      title: "Cozy Ambience",
      text: "A warm dining space designed for family meals and special evenings.",
    },
  ];

  const signatureDishes = [
    "Breakfast Buffet",
    "Chef’s Special Thali",
    "Seasonal Desserts",
  ];

  return (
    <section className="restaurant-section" id="restaurant">
      <div className="restaurant-section__container">
        <div className="restaurant-section__header">
          <p className="restaurant-section__eyebrow">On-Site Dining</p>
          <h2 className="restaurant-section__title">Taste, Relax & Dine in Style</h2>
          <p className="restaurant-section__description">
            Enjoy a premium dining experience at Fuggler with freshly prepared meals,
            welcoming ambience, and a menu crafted for every mood and occasion.
          </p>
        </div>

        <div className="restaurant-section__content">
          <div className="restaurant-section__imageWrap">
            <img
              src={restaurantImg}
              alt="Fuggler restaurant dining area"
              className="restaurant-section__image"
              draggable="false"
            />
          </div>

          <div className="restaurant-section__right">
            <div className="restaurant-section__featureGrid">
              {features.map((item) => (
                <div key={item.title} className="restaurant-section__featureCard">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="restaurant-section__infoCard">
              <h3>Signature Highlights</h3>
              <ul className="restaurant-section__dishList">
                {signatureDishes.map((dish) => (
                  <li key={dish}>{dish}</li>
                ))}
              </ul>

              <div className="restaurant-section__timingRow">
                <span className="restaurant-section__timingLabel">Timings</span>
                <span className="restaurant-section__timingValue">7:00 AM – 10:30 PM</span>
              </div>

              <div className="restaurant-section__ctaGroup">
                <button type="button" className="restaurant-section__btn restaurant-section__btn--primary">
                  View Menu
                </button>
                <button type="button" className="restaurant-section__btn restaurant-section__btn--secondary">
                  Reserve a Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;