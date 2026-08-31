import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/sections/HeroSection";
import BookingSection from "../../components/sections/BookingSection";
import HighlightsSection from "../../components/sections/HighlightsSection";
import RoomsSection from "../../components/sections/RoomsSection";
import OffersSection from "../../components/sections/OffersSection";
import GallerySection from "../../components/sections/GallerySection";
import AmenitiesSection from "../../components/sections/AmenitiesSection";
import RestaurantSection from "../../components/sections/RestaurantSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import AboutSection from "../../components/sections/AboutSection";
import NearbyPlacesSection from "../../components/sections/NearbyPlacesSection";
import MapSection from "../../components/sections/MapSection";
import ContactSection from "../../components/sections/ContactSection";
import "./style.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <HeroSection />
        <BookingSection />
        <HighlightsSection />
        <RoomsSection />
        <OffersSection />
        <GallerySection />
        <AmenitiesSection />
        <RestaurantSection />
        <TestimonialsSection />
        <AboutSection />
        <NearbyPlacesSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}