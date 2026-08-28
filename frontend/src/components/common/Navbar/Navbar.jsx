import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
import fugglerLogo from "../../assets/logos/fuggler-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getGreeting = (hour) => {
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good Night";
  };

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dateString = currentTime.toLocaleDateString([], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const dayString = dayNames[currentTime.getDay()];
  const greeting = getGreeting(currentTime.getHours());

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          className="navbar__toggle navbar__toggle--mobile"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="navbar__bar" />
          <span className="navbar__bar" />
          <span className="navbar__bar" />
        </button>

        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-box">
            <img
              src={fugglerLogo}
              alt="Fuggler Logo"
              className="navbar__logo-img"
            />
          </span>
          <span className="navbar__logo-text">Fuggler</span>
        </a>

        <nav className="navbar__desktop">
          <a href="#home" className="navbar__link">Home</a>
          <a href="#rooms" className="navbar__link">Rooms</a>
          <a href="#resturant" className="navbar__link">Resturant</a>
          <a href="#amenities" className="navbar__link">Amenities</a>
          <a href="#about" className="navbar__link">About Us</a>
        </nav>

        <a href="#booking" className="navbar__book-btn">
          Book Your Stay
        </a>

        <div className="navbar__time-box">
          <span className="navbar__time">{timeString}</span>
          <span className="navbar__date">
            {dayString}, {dateString}
          </span>
          <span className="navbar__greeting">{greeting}</span>
        </div>
      </div>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}