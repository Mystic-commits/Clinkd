import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="home-hero">
      <div className="home-hero-animated-overlay" />
      <div className="home-hero-content">
        <h1 className="home-hero-title">
          <span className="home-hero-title-gradient">Upcoming</span> <span className="home-hero-title-white">Events</span>
        </h1>
        <p className="home-hero-subtitle">Discover and book tickets for the hottest festivals and concerts</p>
        <button className="home-hero-cta" onClick={() => navigate('/events')}>Find Your Event Partner &rarr;</button>
      </div>
    </section>
  );
};

export default Hero;