import React from "react";
import heroConcert from "@/assets/hero-concert.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroConcert})`,
          animation: `kenburns 20s ease-in-out infinite`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #a855f7, #60a5fa)',
            }}
          >
            Upcoming
          </span>
          <span className="text-white"> Events</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
          Discover and book tickets for the hottest festivals and concerts
        </p>
        <button className="bg-primary-purple text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
          Find Your Event Partner →
        </button>
      </div>
      <style>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-2%, 2%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;