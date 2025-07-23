import React from "react";
import "../styles/eventcard.css";
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({ event, onViewDetails }) => {
  // Helper to format date if needed, assuming date is a string like 'YYYY-MM-DD'
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="event-card" onClick={() => onViewDetails && onViewDetails(event)}>
      <div className="event-card-img-wrapper">
        <img src={event.image} alt={event.title} className="event-card-img" />
      </div>
      <div className="event-card-content">
        <div className="event-card-title">{event.title}</div>
        <div className="event-card-meta">
          <Calendar style={{marginRight: 4}} />
          {formattedDate}
        </div>
        <div className="event-card-meta">
          <MapPin style={{marginRight: 4}} />
          {event.location}
        </div>
      </div>
    </div>
  );
};

export default EventCard;