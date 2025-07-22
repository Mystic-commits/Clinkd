import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { type Event } from "@/services/eventsApi";

const Wishlist = () => {
  const [wishlistEvents, setWishlistEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadWishlist = () => {
      const wishlist = JSON.parse(localStorage.getItem('clikd-wishlist') || '[]');
      setWishlistEvents(wishlist);
    };

    loadWishlist();

    // Listen for storage changes (when wishlist is updated from other components)
    const handleStorageChange = () => {
      loadWishlist();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab updates
    window.addEventListener('wishlistUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleStorageChange);
    };
  }, []);

  const clearWishlist = () => {
    localStorage.removeItem('clikd-wishlist');
    setWishlistEvents([]);
    // Dispatch custom event to update other components
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const exportWishlist = () => {
    const wishlistData = wishlistEvents.map(event => ({
      title: event.title,
      date: event.date,
      location: event.location,
      description: event.description
    }));

    const dataStr = JSON.stringify(wishlistData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'clikd-fest-wishlist.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">My</span>
            <span className="text-foreground"> Wishlist</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your saved events and festival favorites
          </p>
        </div>

        {wishlistEvents.length > 0 ? (
          <>
            {/* Wishlist Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-5 w-5 text-primary" />
                <span>{wishlistEvents.length} event{wishlistEvents.length !== 1 ? 's' : ''} saved</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={exportWishlist}>
                  Export Wishlist
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={clearWishlist}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </Button>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistEvents.map((event) => (
                <div key={event.id} className="animate-fade-in">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-muted/20 rounded-lg p-12 max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Your wishlist is empty
              </h3>
              <p className="text-muted-foreground mb-6">
                Start exploring events and add your favorites to see them here!
              </p>
              <Button asChild>
                <a href="/events">Browse Events</a>
              </Button>
            </div>
          </div>
        )}

        {/* Wishlist Tips */}
        {wishlistEvents.length > 0 && (
          <div className="mt-16 bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Wishlist Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Your wishlist is automatically saved to your browser</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Export your wishlist to share with friends</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Click the heart icon again to remove events</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Keep your wishlist updated for better recommendations</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;