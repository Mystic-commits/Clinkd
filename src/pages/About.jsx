import { Music, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section className="section about-modern-section">
      {/* Optional: Background blob/gradient */}
      <div className="about-bg-blob" aria-hidden="true" />
      <div style={{marginBottom: '2.5rem'}}>
        <h1 className="section-title">
          <span className="event-section-title-gradient">About</span> Clikd Fest
        </h1>
        <p className="section-subtitle">
          We're passionate about connecting college students with unforgettable festival experiences. Clikd Fest is more than just an event platform—we're building a community of music lovers and culture enthusiasts.
        </p>
      </div>
      <div className="about-modern-grid">
        <div className="about-modern-card">
          <div className="about-modern-icon about-modern-icon-mission"><Target /></div>
          <div className="about-modern-card-title">Our Mission</div>
          <div className="about-modern-card-desc">
            To revolutionize how students discover and connect with festivals and concerts. We believe every student deserves access to amazing cultural experiences and the opportunity to find like-minded festival partners.
          </div>
        </div>
        <div className="about-modern-card">
          <div className="about-modern-icon about-modern-icon-vision"><Award /></div>
          <div className="about-modern-card-title">Our Vision</div>
          <div className="about-modern-card-desc">
            To become the go-to platform for festival discovery in India, creating a vibrant ecosystem where students can explore, connect, and experience the best of music and cultural events together.
          </div>
        </div>
      </div>
      <div className="about-modern-divider" />
      <h2 className="about-modern-values-title">Our <span className="event-section-title-gradient">Values</span></h2>
      <div className="about-modern-values-grid">
        <div className="about-modern-value-card">
          <div className="about-modern-value-icon about-modern-icon-music"><Music /></div>
          <div className="about-modern-value-title">Music First</div>
          <div className="about-modern-value-desc">We celebrate the power of music to bring people together and create lasting memories.</div>
        </div>
        <div className="about-modern-value-card">
          <div className="about-modern-value-icon about-modern-icon-community"><Users /></div>
          <div className="about-modern-value-title">Community</div>
          <div className="about-modern-value-desc">Building authentic connections between students who share a passion for live events.</div>
        </div>
        <div className="about-modern-value-card">
          <div className="about-modern-value-icon about-modern-icon-innovation"><Target /></div>
          <div className="about-modern-value-title">Innovation</div>
          <div className="about-modern-value-desc">Constantly improving our platform to enhance the festival discovery experience.</div>
        </div>
      </div>
    </section>
  );
};

export default About;