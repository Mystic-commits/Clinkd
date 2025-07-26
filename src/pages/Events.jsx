import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import { Search, Filter } from "lucide-react";
import { eventsAPI } from "@/services/eventsApi";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const fetchedEvents = await eventsAPI.fetchEvents();
        setEvents(fetchedEvents);
        setFilteredEvents(fetchedEvents);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (locationFilter) {
      filtered = filtered.filter(event =>
        event.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    setFilteredEvents(filtered);
  }, [events, searchQuery, locationFilter]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    try {
      setLoading(true);
      const searchResults = await eventsAPI.searchEvents(searchQuery, locationFilter);
      setFilteredEvents(searchResults);
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setLocationFilter("");
    setFilteredEvents(events);
  };

  return (
    <section className="section">
      {/* Header */}
      <div style={{marginBottom: '2.5rem'}}>
        <h1 className="section-title">
          <span className="event-section-title-gradient">All</span> Events
        </h1>
        <p className="section-subtitle">
          Discover exciting college festivals and find your perfect event partner
        </p>
      </div>
      {/* Search and Filters */}
      <div className="events-searchbar-row">
        <div className="events-searchbar-group">
          <Search className="events-searchbar-icon" />
          <input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="events-searchbar-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <div className="events-searchbar-group">
          <Filter className="events-searchbar-icon" />
          <input
            placeholder="Filter by location..."
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="events-searchbar-input"
          />
        </div>
        <div className="events-searchbar-btns">
          <button onClick={handleSearch} disabled={loading} className="events-searchbar-btn">Search</button>
          <button onClick={clearFilters} className="events-searchbar-btn events-searchbar-btn-outline">Clear</button>
        </div>
      </div>
      {/* Event Count */}
      <div className="events-count-row">
        <p className="events-count-text">
          Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          {(searchQuery || locationFilter) && ' matching your criteria'}
        </p>
      </div>
      {/* Events Grid or Empty State */}
      {loading ? (
        <div className="events-grid">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="event-card event-card-skeleton" />
          ))}
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="event-no-events-box">
          <div style={{fontSize: '2.2rem', marginBottom: '1rem'}}>😕</div>
          <div style={{fontWeight: 600, color: '#fff', marginBottom: 8}}>No events found</div>
          <div style={{color: '#b0b0b0'}}>Try adjusting your search or filters.</div>
        </div>
      ) : (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;