import React from "react";
import "./style.css";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Leisure Guest",
    quote:
      "The room was beautiful, quiet, and incredibly comfortable. The whole stay felt warm and premium.",
  },
  {
    name: "Rohit Mehta",
    role: "Business Traveler",
    quote:
      "Fuggler Hotel made business travel feel effortless. Great service, smooth check-in, and a very polished atmosphere.",
  },
  {
    name: "Priya Nair",
    role: "Family Guest",
    quote:
      "The team was welcoming from the moment we arrived. We loved the elegant rooms and the attention to detail.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      {/* Testimonials Section */}
      <div className="testimonials-section__header">
        <p className="testimonials-section__eyebrow">Guest Experiences</p>
        <h2>Why Guests Remember Their Stay</h2>
        <p>
          Thoughtful service, elegant spaces, and a calm atmosphere keep guests returning to Fuggler Hotel.
        </p>
      </div>

      <div className="testimonials-section__grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            {/* Testimonial Card */}
            <p className="testimonial-card__quote">“{testimonial.quote}”</p>
            <div className="testimonial-card__meta">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}