import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { type Event } from "@/services/eventsApi";

interface EventCardProps {
  event: Event;
  onViewDetails?: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  // Helper to format date if needed, assuming date is a string like 'YYYY-MM-DD'
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="bg-card-dark rounded-lg overflow-hidden flex flex-col cursor-pointer"
      onClick={() => onViewDetails && onViewDetails(event)}
    >
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
        <div className="space-y-2 text-neutral-400 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;