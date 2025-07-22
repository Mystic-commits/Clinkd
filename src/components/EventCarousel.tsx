import React from "react";
import EventCard from "./EventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Event } from "@/services/eventsApi";
import { Button } from "@/components/ui/button";

interface EventCarouselProps {
  events: Event[];
  title?: string;
  onViewDetails?: (event: Event) => void;
}

const EventCarousel: React.FC<EventCarouselProps> = ({
  events,
  title,
  onViewDetails,
}) => {
  const [current, setCurrent] = React.useState(0);
  const visibleCount = 3;

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

  return (
    <section className="py-16 bg-background-dark">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #a855f7, #60a5fa)",
                }}
              >
                {title.split(" ")[0]}
              </span>
              <span className="text-white">
                {" "}
                {title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-lg text-neutral-400">
              Discover exciting college festivals and find your perfect event
              partner
            </p>
          </div>
        )}
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-card-dark border-neutral-700 hover:bg-neutral-800"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(current, current + visibleCount).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-card-dark border-neutral-700 hover:bg-neutral-800"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary-purple text-primary-purple bg-transparent hover:bg-primary-purple/10 rounded-full px-8">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;