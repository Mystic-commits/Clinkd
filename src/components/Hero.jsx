import React from "react";
import "../fonts.css";
import "../global.css";
import heroImg from "../assets/hero-concert.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section-pro">
      <div className="hero-bg-pro">
        <img src={heroImg} alt="Concert crowd" className="hero-img-pro" />
      </div>
      <div className="hero-content-pro">
        <h1 className="hero-title-pro">Unleash the <span className="hero-title-gradient-pop">Vibe</span>.<br />Find Your Next <span className="hero-title-gradient-pop">Festival</span></h1>
        <p className="hero-subtitle-pro">Discover, connect, and experience the best college events near you.</p>
        <button className="hero-cta-pro" onClick={() => navigate('/events')}>Explore Events</button>
      </div>
    </section>
  );
};

export default Hero;