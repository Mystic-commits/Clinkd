import React from "react";
import "../styles/header.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <header className="glass-navbar-outer">
      <div className="glass-navbar glass-navbar-long">
        <a href="/" className="header-logo-pro">
          <span className="brand-main">Clikd</span>
          <span className="brand-accent">Fest</span>
        </a>
        <nav className="header-nav-pro">
          <a href="/" className={isActive("/") ? "active" : ""}>Home</a>
          <a href="/events" className={isActive("/events") ? "active" : ""}>Events</a>
          <a href="/about" className={isActive("/about") ? "active" : ""}>About</a>
          <a href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</a>
          <a href="/login" className="header-login-btn-pro">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;