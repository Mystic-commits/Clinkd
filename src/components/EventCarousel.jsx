import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/eventcard.css";
import { useNavigate } from "react-router-dom";

const EventCarousel = ({
  events,
  title,
  onViewDetails,
}) => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const navigate = useNavigate();

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + visibleCount >= events.length ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [events.length]);

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? Math.max(0, events.length - visibleCount) : prev - 1
    );
  };
  const handleNext = () => {
    setCurrent((prev) =>
      prev + visibleCount >= events.length ? 0 : prev + 1
    );
  };

  // Dots for pagination
  const totalPages = Math.ceil(events.length / visibleCount);
  const currentPage = Math.floor(current / visibleCount);

  return (
    <section className="event-section-carousel-centered">
      <div className="event-section-header-carousel">
        <h2 className="event-section-title-carousel">
          <span className="event-section-title-gradient">Upcoming</span> <span className="event-section-title-white">Events</span>
        </h2>
        <p className="event-section-subtitle-carousel">Discover exciting college festivals and find your perfect event partner</p>
      </div>
      <div className="event-carousel-row-carousel-centered">
        <button className="event-carousel-nav-carousel-centered" onClick={handlePrev}>
          <ChevronLeft />
        </button>
        <div className="event-carousel-cards-carousel-centered">
          {events.slice(current, current + visibleCount).map((event) => (
            <div className="event-carousel-card-anim" key={event.id}>
              <EventCard
                event={event}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
        <button className="event-carousel-nav-carousel-centered" onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
      <div className="event-section-footer-carousel">
        <button className="event-section-viewall-carousel" onClick={() => navigate('/events')}>View All Events</button>
      </div>
    </section>
  );
};

export default EventCarousel;