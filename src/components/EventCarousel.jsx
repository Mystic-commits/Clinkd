import React, { useRef, useEffect } from "react";
import EventCard from "./EventCard";
import "../styles/eventcard.css";
import { useNavigate } from "react-router-dom";

const AUTO_SCROLL_INTERVAL = 3000; // ms
const SCROLL_AMOUNT = 340 + 32; // card width + gap (px)

const EventCarousel = ({
  events,
  title,
  onViewDetails,
}) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    function autoScroll() {
      if (!scrollContainer) return;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft + SCROLL_AMOUNT >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
      }
    }

    intervalRef.current = setInterval(autoScroll, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [events.length]);

  // Pause on hover
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft + SCROLL_AMOUNT >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL);
  };

  return (
    <section className="event-section-carousel-centered">
      <div className="event-section-header-carousel">
        <h2 className="event-section-title-carousel">
          <span className="event-section-title-gradient">Upcoming</span> <span className="event-section-title-white">Events</span>
        </h2>
        <p className="event-section-subtitle-carousel">Discover exciting college festivals and find your perfect event partner</p>
      </div>
      <div className="event-carousel-row-carousel-centered">
        <div
          className="event-carousel-cards-horizontal-scroll"
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {events.map((event) => (
            <div className="event-carousel-card-anim" key={event.id}>
              <EventCard
                event={event}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="event-section-footer-carousel">
        <button className="event-section-viewall-carousel" onClick={() => navigate('/events')}>View All Events</button>
      </div>
    </section>
  );
};

export default EventCarousel;