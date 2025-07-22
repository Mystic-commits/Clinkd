import React from "react";
import { Music, Zap, Users, Calendar } from "lucide-react";

const features = [
  {
    icon: <Music className="h-8 w-8 text-primary-purple" />,
    title: "Top Artists",
    description: "Experience performances from world-renowned artists and emerging talents."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-purple" />,
    title: "Immersive Experience",
    description: "Cutting-edge sound, lighting, and visual effects for a complete sensory experience."
  },
  {
    icon: <Users className="h-8 w-8 text-primary-purple" />,
    title: "Community",
    description: "Connect with like-minded people who share your passion for music and culture."
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary-purple" />,
    title: "Year-Round Events",
    description: "From summer festivals to intimate winter concerts, we've got your calendar covered."
  }
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2 text-white">Why Choose Clikd Fest</h2>
            <p className="text-lg text-neutral-400">We create unforgettable experiences that bring people together through music and art</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card-dark rounded-lg p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 flex items-center justify-center bg-muted-dark rounded-full p-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;