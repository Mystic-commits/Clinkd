import { Button } from "@/components/ui/button";
import { Music, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1 className="about-title">
          <span className="about-title-purple">About</span> Clikd Fest
        </h1>
        <p className="about-subtitle">
          We're passionate about connecting college students with unforgettable festival experiences. Clikd Fest is more than just an event platform—we're building a community of music lovers and culture enthusiasts.
        </p>
      </div>
      <div className="about-main-grid">
        <div className="about-card">
          <div className="about-card-icon"><Target className="h-8 w-8" /></div>
          <h2 className="about-card-title">Our Mission</h2>
          <p className="about-card-desc">
            To revolutionize how students discover and connect with festivals and concerts. We believe every student deserves access to amazing cultural experiences and the opportunity to find like-minded festival partners.
          </p>
        </div>
        <div className="about-card">
          <div className="about-card-icon"><Award className="h-8 w-8" /></div>
          <h2 className="about-card-title">Our Vision</h2>
          <p className="about-card-desc">
            To become the go-to platform for festival discovery in India, creating a vibrant ecosystem where students can explore, connect, and experience the best of music and cultural events together.
          </p>
        </div>
      </div>
      <h2 className="about-values-title"><span className="about-values-title-purple">Our</span> Values</h2>
      <div className="about-values-grid">
        <div className="about-value-card">
          <div className="about-value-icon"><Music className="h-10 w-10" /></div>
          <h3 className="about-value-title">Music First</h3>
          <p className="about-value-desc">We celebrate the power of music to bring people together and create lasting memories.</p>
        </div>
        <div className="about-value-card">
          <div className="about-value-icon"><Users className="h-10 w-10" /></div>
          <h3 className="about-value-title">Community</h3>
          <p className="about-value-desc">Building authentic connections between students who share a passion for live events.</p>
        </div>
        <div className="about-value-card">
          <div className="about-value-icon"><Target className="h-10 w-10" /></div>
          <h3 className="about-value-title">Innovation</h3>
          <p className="about-value-desc">Constantly improving our platform to enhance the festival discovery experience.</p>
        </div>
      </div>
    </div>
  );
};

export default About;