import React, { useEffect, useRef, useState } from "react";
import "./style.css";

import deluxe1 from "../../../assets/images/rooms/deluxe/01-deluxe-main.jpg";
import deluxe2 from "../../../assets/images/rooms/deluxe/02-deluxe-bed.jpg";
import deluxe3 from "../../../assets/images/rooms/deluxe/03-deluxe-window.jpg";
import deluxe4 from "../../../assets/images/rooms/deluxe/04-deluxe-seating.jpg";
import deluxe5 from "../../../assets/images/rooms/deluxe/05-deluxe-workspace.jpg";
import deluxe6 from "../../../assets/images/rooms/deluxe/06-deluxe-bathroom.jpg";
import deluxe7 from "../../../assets/images/rooms/deluxe/07-deluxe-amenities.jpg";
import deluxe8 from "../../../assets/images/rooms/deluxe/08-deluxe-night.jpg";

import premium1 from "../../../assets/images/rooms/premium/01-premium-main.jpg";
import premium2 from "../../../assets/images/rooms/premium/02-premium-bed.jpg";
import premium3 from "../../../assets/images/rooms/premium/03-premium-window.jpg";
import premium4 from "../../../assets/images/rooms/premium/04-premium-seating.jpg";
import premium5 from "../../../assets/images/rooms/premium/05-premium-workspace.jpg";
import premium6 from "../../../assets/images/rooms/premium/06-premium-bathroom.jpg";
import premium7 from "../../../assets/images/rooms/premium/07-premium-amenities.jpg";
import premium8 from "../../../assets/images/rooms/premium/08-premium-night.jpg";

import executive1 from "../../../assets/images/rooms/executive/01-executive-main.jpg";
import executive2 from "../../../assets/images/rooms/executive/02-executive-bed.jpg";
import executive3 from "../../../assets/images/rooms/executive/03-executive-window.jpg";
import executive4 from "../../../assets/images/rooms/executive/04-executive-seating.jpg";
import executive5 from "../../../assets/images/rooms/executive/05-executive-workspace.jpg";
import executive6 from "../../../assets/images/rooms/executive/06-executive-bathroom.jpg";
import executive7 from "../../../assets/images/rooms/executive/07-executive-amenities.jpg";
import executive8 from "../../../assets/images/rooms/executive/08-executive-night.jpg";

const rooms = [
  {
    title: "Deluxe Room",
    description:
      "A warm, elegant stay designed for comfort with soft interiors, a cozy layout, and everything you need to unwind.",
    guests: 2,
    bed: "Queen Bed",
    size: "24 m²",
    price: "₹5,500/night",
    images: [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5, deluxe6, deluxe7, deluxe8],
  },
  {
    title: "Premium Room",
    description:
      "Refined, spacious, and beautifully styled for guests who want a more elevated stay experience.",
    guests: 2,
    bed: "King Bed",
    size: "28 m²",
    price: "₹6,800/night",
    images: [premium1, premium2, premium3, premium4, premium5, premium6, premium7, premium8],
  },
  {
    title: "Executive Suite",
    description:
      "Extra room, premium finishes, and a calm luxury feel for longer stays or special occasions.",
    guests: 3,
    bed: "King Bed",
    size: "40 m²",
    price: "₹8,999/night",
    images: [executive1, executive2, executive3, executive4, executive5, executive6, executive7, executive8],
  },
];

function RoomCard({ room, index }) {
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % room.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [room.images.length]);

  const goToImage = (imageIndex) => setActiveImage(imageIndex);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50) {
      setActiveImage((prev) => (prev + 1) % room.images.length);
    }

    if (swipeDistance < -50) {
      setActiveImage((prev) => (prev - 1 + room.images.length) % room.images.length);
    }
  };

  return (
    <article className="room-card">
      <div
        className="room-card__image"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={room.images[activeImage]}
          alt={`${room.title} ${activeImage + 1}`}
          className="room-card__img"
          draggable="false"
        />

        <span className="room-card__badge">Room {index + 1}</span>

        <div className="room-card__dots" aria-label="Room image navigation">
          {room.images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              className={`room-card__dot ${
                dotIndex === activeImage ? "room-card__dot--active" : ""
              }`}
              onClick={() => goToImage(dotIndex)}
              aria-label={`Go to image ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="room-card__content">
        <div className="room-card__text">
          <h3>{room.title}</h3>
          <p>{room.description}</p>
        </div>

        <ul className="room-card__meta">
          <li>{room.guests} Guests</li>
          <li>{room.bed}</li>
          <li>{room.size}</li>
        </ul>

        <div className="room-card__footer">
          <strong>{room.price}</strong>
          <button type="button">View Details</button>
        </div>
      </div>
    </article>
  );
}

export default function RoomsSection() {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-section__container">
        <div className="rooms-section__header">
          <p className="rooms-section__eyebrow">Our Rooms</p>
          <h2 className="rooms-section__title">Rooms Designed for Rest</h2>
          <p className="rooms-section__description">
            Thoughtfully designed spaces created for comfort, calm, and effortless stays at Fuggler Hotel.
          </p>
        </div>

        <div className="rooms-section__grid">
          {rooms.map((room, index) => (
            <RoomCard room={room} index={index} key={room.title} />
          ))}
        </div>
      </div>
    </section>
  );
}