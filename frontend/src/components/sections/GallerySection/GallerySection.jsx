import React from "react";
import "./style.css";

import gallery1 from "../../../assets/images/gallery/01-gallery-exterior.jpg";
import gallery2 from "../../../assets/images/gallery/02-gallery-entrance.jpg";
import gallery3 from "../../../assets/images/gallery/03-gallery-arrival.jpg";
import gallery4 from "../../../assets/images/gallery/04-gallery-reception.jpg";
import gallery5 from "../../../assets/images/gallery/05-gallery-lobby.jpg";
import gallery6 from "../../../assets/images/gallery/06-gallery-lounge.jpg";
import gallery7 from "../../../assets/images/gallery/07-gallery-corridor.jpg";
import gallery8 from "../../../assets/images/gallery/08-gallery-staircase.jpg";
import gallery9 from "../../../assets/images/gallery/09-gallery-elevator.jpg";
import gallery10 from "../../../assets/images/gallery/10-gallery-architecture-detail.jpg";
import gallery11 from "../../../assets/images/gallery/11-gallery-garden.jpg";
import gallery12 from "../../../assets/images/gallery/12-gallery-ground.jpg";
import gallery13 from "../../../assets/images/gallery/13-gallery-evening.jpg";
import gallery14 from "../../../assets/images/gallery/14-gallery-night.jpg";
import gallery15 from "../../../assets/images/gallery/15-gallery-drone-front.jpg";
import gallery16 from "../../../assets/images/gallery/16-gallery-drone-top.jpg";
import gallery17 from "../../../assets/images/gallery/17-gallery-drone-city.jpg";
import gallery18 from "../../../assets/images/gallery/18-gallery-aerial-evening.jpg";

const galleryItems = [
  { title: "Exterior Welcome", category: "Arrival", image: gallery1 },
  { title: "Grand Entrance", category: "Arrival", image: gallery2 },
  { title: "Arrival Experience", category: "Arrival", image: gallery3 },
  { title: "Reception Desk", category: "Public Space", image: gallery4 },
  { title: "Elegant Lobby", category: "Public Space", image: gallery5 },
  { title: "Lounge Area", category: "Relax", image: gallery6 },
  { title: "Corridor View", category: "Public Space", image: gallery7 },
  { title: "Staircase Detail", category: "Architecture", image: gallery8 },
  { title: "Elevator Access", category: "Public Space", image: gallery9 },
  { title: "Architecture Detail", category: "Architecture", image: gallery10 },
  { title: "Garden View", category: "Atmosphere", image: gallery11 },
  { title: "Ground View", category: "Atmosphere", image: gallery12 },
  { title: "Evening Glow", category: "Atmosphere", image: gallery13 },
  { title: "Night Facade", category: "Atmosphere", image: gallery14 },
  { title: "Front Drone View", category: "Aerial", image: gallery15 },
  { title: "Top Drone View", category: "Aerial", image: gallery16 },
  { title: "City Drone View", category: "Aerial", image: gallery17 },
  { title: "Aerial Evening View", category: "Aerial", image: gallery18 },
];

export default function GallerySection() {
  const repeatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="gallery-section">
      <div className="gallery-section__header">
        <p className="gallery-section__eyebrow">Gallery</p>
        <h2>Explore Fuggler in Frames</h2>
        <p>
          Step into the full Fuggler experience through elegant spaces, refined architecture,
          premium surroundings, and welcoming moments crafted for comfort.
        </p>
      </div>

      <div className="gallery-marquee" aria-label="Hotel gallery carousel">
        <div className="gallery-marquee__track">
          {repeatedItems.map((item, index) => (
            <article className="gallery-marquee__item" key={`${item.title}-${index}`}>
              <img src={item.image} alt={item.title} className="gallery-marquee__image" />
              <div className="gallery-marquee__overlay">
                <span className="gallery-marquee__category">{item.category}</span>
                <h3 className="gallery-marquee__title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}