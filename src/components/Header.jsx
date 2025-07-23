import React from "react";
import "../styles/header.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/ProfileDropdown";
import { Music } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <header>
      <div className="header-gradient"></div>
      <div className="header-container">
        <a href="/" className="header-logo">Clikd <span style={{color: '#6366f1'}}>Fest</span></a>
        <nav className="header-nav">
          <a href="/" className={isActive("/") ? "active" : ""}>Home</a>
          <a href="/events" className={isActive("/events") ? "active" : ""}>Events</a>
          <a href="/about" className={isActive("/about") ? "active" : ""}>About</a>
          <a href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</a>
          <a href="/login" className="header-login-btn">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;