import React from "react";
import "../styles/footer.css";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-col">
          <span className="footer-title">Clikd <span className="footer-title-accent">Fest</span></span>
          <div className="footer-desc">Connecting college students with festival partners</div>
          <div className="footer-socials">
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Youtube /></a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Site Links</div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Resources</div>
          <ul className="footer-resources">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Partner Guide</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <div className="footer-contact">yugjohri520@gmail.com</div>
          <div className="footer-contact">+91 7247076274</div>
          <div className="footer-contact footer-contact-location">Delhi, India</div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">&copy; {new Date().getFullYear()} Clikd Fest. All rights reserved.</div>
    </footer>
  );
};

export default Footer;