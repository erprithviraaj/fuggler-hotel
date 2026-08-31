import React from "react";
import "./style.css";

const testimonials = [
  {
    name: "Prithvi Raj",
    role: "Leisure Guest",
    city: "Delhi",
    rating: 5,
    quote:
      "The room was beautiful, quiet, and incredibly comfortable. The whole stay felt warm and premium.",
  },
  {
    name: "Abhay Yadav",
    role: "Business Traveler",
    city: "Lucknow",
    rating: 5,
    quote:
      "Fuggler Hotel made business travel feel effortless. Great service, smooth check-in, and a very polished atmosphere.",
  },
  {
    name: "Arjun Singh",
    role: "Family Guest",
    city: "Jaipur",
    rating: 5,
    quote:
      "The team was welcoming from the moment we arrived. We loved the elegant rooms and the attention to detail.",
  },
  {
    name: "Prijal",
    role: "Couple Stay",
    city: "Indore",
    rating: 5,
    quote:
      "A calm, stylish, and comfortable stay. Everything from the room to the service felt thoughtfully managed.",
  },
  {
    name: "Siya",
    role: "Weekend Guest",
    city: "Noida",
    rating: 5,
    quote:
      "The ambience was lovely, the staff was polite, and the overall experience felt truly relaxing.",
  },
  {
    name: "Ananya Joshi",
    role: "Luxury Stay Guest",
    city: "Mumbai",
    rating: 5,
    quote:
      "Beautiful interiors, excellent hospitality, and a very peaceful environment. I would happily return again.",
  },
];

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`testimonial-card__star ${
        index < rating ? "testimonial-card__star--filled" : ""
      }`}
    >
      ★
    </span>
  ));
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-section__container">
        <div className="testimonials-section__header">
          <p className="testimonials-section__eyebrow">Guest Experiences</p>
          <h2 className="testimonials-section__title">Why Guests Remember Their Stay</h2>
          <p className="testimonials-section__description">
            Thoughtful service, elegant spaces, and a calm atmosphere keep guests returning to Fuggler Hotel.
          </p>
        </div>

        <div className="testimonials-section__stats">
          <div className="testimonials-section__stat">
            <strong>4.9/5</strong>
            <span>Average Rating</span>
          </div>
          <div className="testimonials-section__stat">
            <strong>500+</strong>
            <span>Happy Guests</span>
          </div>
          <div className="testimonials-section__stat">
            <strong>98%</strong>
            <span>Recommend Us</span>
          </div>
        </div>

        <div className="testimonials-section__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-card__top">
                <div className="testimonial-card__avatar">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div
                  className="testimonial-card__rating"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <p className="testimonial-card__quote">“{testimonial.quote}”</p>

              <div className="testimonial-card__meta">
                <div className="testimonial-card__identity">
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role} • {testimonial.city}
                  </span>
                </div>
                <div className="testimonial-card__badge">Verified Stay</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}