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
    <section className="feature-cards">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-card">
          {feature.icon}
          <div className="feature-card-title">{feature.title}</div>
          <div className="feature-card-desc">{feature.description}</div>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;