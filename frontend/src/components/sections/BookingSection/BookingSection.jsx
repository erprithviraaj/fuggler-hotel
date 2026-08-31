import React from "react";
import "./style.css";

export default function BookingSection() {
  return (
    <section className="booking-section">
      <div className="booking-section__container">
        <div className="booking-section__header">
          <p className="booking-section__eyebrow">Plan Your Stay</p>
          <h2 className="booking-section__title">Check Availability</h2>
          <p className="booking-section__description">
            Choose your dates and guests to find the perfect room at Fuggler Hotel.
          </p>
        </div>

        <form className="booking-section__form">
          <div className="booking-section__field">
            <label htmlFor="checkin">Check-in</label>
            <input id="checkin" name="checkin" type="date" />
          </div>

          <div className="booking-section__field">
            <label htmlFor="checkout">Check-out</label>
            <input id="checkout" name="checkout" type="date" />
          </div>

          <div className="booking-section__field">
            <label htmlFor="guests">Guests</label>
            <input id="guests" name="guests" type="number" min="1" placeholder="2" />
          </div>

          <button type="submit" className="booking-section__submit">
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
}