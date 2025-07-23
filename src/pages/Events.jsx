import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  if (loading && events.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded w-64 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
    );
  }

  return (
    <div className="events-fullwidth-section">
      {/* Header */}
      <div className="events-header">
        <h1 className="events-title">
          <span className="events-title-gradient">All</span> Events
        </h1>
        <p className="events-subtitle">
          Discover exciting college festivals and find your perfect event partner
        </p>
      </div>
      {/* Search and Filters */}
      <div className="events-searchbar-row">
        <div className="events-searchbar-group">
          <Search className="events-searchbar-icon" />
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="events-searchbar-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <div className="events-searchbar-group">
          <Filter className="events-searchbar-icon" />
          <Input
            placeholder="Filter by location..."
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="events-searchbar-input"
          />
        </div>
        <div className="events-searchbar-btns">
          <Button onClick={handleSearch} disabled={loading} className="events-searchbar-btn">Search</Button>
          <Button variant="outline" onClick={clearFilters} className="events-searchbar-btn">Clear</Button>
        </div>
      </div>
      {/* Event Count */}
      <div className="events-count-row">
        <p className="events-count-text">
          Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          {(searchQuery || locationFilter) && ' matching your criteria'}
        </p>
      </div>
      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;