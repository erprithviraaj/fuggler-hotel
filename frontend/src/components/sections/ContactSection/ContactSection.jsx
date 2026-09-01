import React from "react";
import "./style.css";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name") || "";
    const mobile = formData.get("mobile") || "";
    const email = formData.get("email") || "";
    const checkin = formData.get("checkin") || "";
    const checkout = formData.get("checkout") || "";
    const guests = formData.get("guests") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent("Hotel Enquiry - Fuggler Hotel");
    const body = encodeURIComponent(
      `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nMessage: ${message}`
    );

    window.location.href = `mailto:erprithviraaj@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__header">
          <p className="contact-section__eyebrow">Contact Us</p>
          <h2 className="contact-section__title">Ready to Experience Fuggler Hotel?</h2>
          <p className="contact-section__description">
            Plan your stay, ask a question, or send a quick enquiry. We’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-section__content">
          <div className="contact-section__left common-glass-card">
            <div className="contact-form__head">
              <p className="contact-form__eyebrow">Send Enquiry</p>
              <h3 className="contact-form__title">Quick Booking Request</h3>
              <p className="contact-form__text">
                Fill this short form and we’ll respond as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__grid">
                <div className="contact-form__field">
                  <label htmlFor="name">Name</label>
                  <input
                    className="fuggler-input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    className="fuggler-input"
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Your mobile number"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input
                    className="fuggler-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="guests">Guests</label>
                  <select
                    className="fuggler-select"
                    id="guests"
                    name="guests"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select guests
                    </option>
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4+ Guests">4+ Guests</option>
                  </select>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="checkin">Check-in</label>
                  <input
                    className="fuggler-input"
                    id="checkin"
                    name="checkin"
                    type="date"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="checkout">Check-out</label>
                  <input
                    className="fuggler-input"
                    id="checkout"
                    name="checkout"
                    type="date"
                    required
                  />
                </div>

                <div className="contact-form__field contact-form__field--full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="fuggler-textarea"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Any special request?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="fuggler-btn fuggler-btn--primary contact-form__submit"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="contact-section__right">
            <div className="contact-section__infoGrid">
              <div className="contact-card common-glass-card">
                <p className="contact-card__label">Address</p>
                <a
                  className="contact-card__value contact-card__value--link"
                  href="https://maps.app.goo.gl/MrQbvjjFe8GmJRtZ7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Miranpur Pinvat, Uttar Pradesh 226401
                </a>
              </div>

              <div className="contact-card common-glass-card">
                <p className="contact-card__label">Phone</p>
                <a className="contact-card__value" href="tel:+919034018902">
                  +91 90340 18902
                </a>
              </div>

              <div className="contact-card common-glass-card">
                <p className="contact-card__label">Email</p>
                <a className="contact-card__value" href="mailto:erprithviraaj@gmail.com">
                  erprithviraaj@gmail.com
                </a>
              </div>

              <div className="contact-card common-glass-card">
                <p className="contact-card__label">WhatsApp</p>
                <a
                  className="contact-card__value"
                  href="https://wa.me/919034018902"
                  target="_blank"
                  rel="noreferrer"
                >
                  24/7 Chat Support
                </a>
              </div>
            </div>

            <div className="contact-section__actions common-glass-card">
              <a
                className="fuggler-btn fuggler-btn--primary contact-section__actionBtn"
                href="tel:+919034018902"
              >
                Call Now
              </a>

              <a
                className="fuggler-btn fuggler-btn--secondary contact-section__actionBtn"
                href="https://wa.me/919034018902"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}