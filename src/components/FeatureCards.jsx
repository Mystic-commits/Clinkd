import React from "react";
import "../styles/featurecards.css";
import { Music, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Music className="feature-card-icon" />,
    title: "Top Artists",
    description: "World-renowned artists and emerging talents."
  },
  {
    icon: <Zap className="feature-card-icon" />,
    title: "Immersive Experience",
    description: "Cutting-edge sound, lighting, and visuals."
  },
  {
    icon: <Users className="feature-card-icon" />,
    title: "Community",
    description: "Connect with like-minded music lovers."
  }
];

const FeatureCards = () => {
  return (
    <section className="feature-cards section">
      <h2 className="section-title">Why Choose <span className="event-section-title-gradient">Clikd Fest</span>?</h2>
      <p className="section-subtitle">Experience the best of college festivals with our unique features</p>
      <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%'}}>
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            {feature.icon}
            <div className="feature-card-title">{feature.title}</div>
            <div className="feature-card-desc">{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;