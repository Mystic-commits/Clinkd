import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import FeatureCards from "@/components/FeatureCards";
import EventDetailModal from "@/components/EventDetailModal";
import { eventsAPI } from "@/services/eventsApi";
import "../styles/home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const fetchedEvents = await eventsAPI.fetchEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        setError("Failed to load events. Please try again later.");
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <div className="home-hero"><Hero /></div>
      <div className="home-section" style={{marginTop: '0'}}>
        {loading ? (
          <div className="loader" style={{margin: '3rem auto', width: 48, height: 48, border: '4px solid #a855f7', borderTop: '4px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite'}}></div>
        ) : error ? (
          <div style={{background: '#2d2d34', color: '#fff', borderRadius: 12, padding: 24, maxWidth: 400, margin: '2rem auto', textAlign: 'center'}}>
            <p style={{color: '#a855f7', marginBottom: 16}}>{error}</p>
            <button onClick={() => window.location.reload()} style={{background: '#a855f7', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.5rem', fontWeight: 600, cursor: 'pointer'}}>Try Again</button>
          </div>
        ) : (
          <EventCarousel
            events={events}
            title="Upcoming Events"
            onViewDetails={setSelectedEvent}
          />
        )}
      </div>
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