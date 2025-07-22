import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import FeatureCards from "@/components/FeatureCards";
import EventDetailModal from "@/components/EventDetailModal";
import { eventsAPI, Event } from "@/services/eventsApi";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const fetchedEvents = await eventsAPI.fetchEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Hero />
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-64 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card rounded-lg overflow-hidden">
                      <div className="h-48 bg-muted"></div>
                      <div className="p-6 space-y-4">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                        <div className="h-10 bg-muted rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureCards />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Hero />
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-destructive mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="text-primary hover:underline"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
        <FeatureCards />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <EventCarousel 
        events={events} 
        title="Upcoming Events" 
        onViewDetails={setSelectedEvent}
      />
      <FeatureCards />
      <EventDetailModal 
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default Home;