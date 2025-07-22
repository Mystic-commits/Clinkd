import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Heart } from "lucide-react";
import { type Event } from "@/services/eventsApi";

interface EventDetailModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const attendeeAvatars = [
  "😎", "🤩", "😊", "🥳", "🌟", "🎵", "🎸", "🎤", "🎧", "🔥"
];

const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-2xl overflow-hidden">
        {/* Banner Image */}
        <div className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        {/* Glassy Card Overlay */}
        <div className="relative -mt-16 z-10 mx-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{event.title}</h2>
            <div className="flex items-center text-sm text-gray-300 mb-1">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              {event.date}
            </div>
            <div className="flex items-center text-sm text-gray-300 mb-4">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              {event.location}
            </div>
            <p className="text-gray-200 mb-4 text-base leading-relaxed">
              {event.description}
            </p>
          </div>
          {/* Attendees */}
          <div>
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span className="text-white font-medium">Who's Attending</span>
            </div>
            <div className="flex -space-x-3">
              {attendeeAvatars.map((avatar, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-2xl border-2 border-white shadow hover:scale-110 transition-transform cursor-pointer"
                  title={`User ${idx + 1}`}
                >
                  {avatar}
                </span>
              ))}
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20 text-white text-lg border-2 border-white ml-2">
                +{Math.floor(Math.random() * 50) + 10}
              </span>
            </div>
          </div>
          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform glass hover-glow flex items-center justify-center gap-2">
              <Heart className="h-5 w-5" /> Add to Wishlist
            </button>
            <button className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white font-semibold shadow-lg hover:scale-105 transition-transform border border-white/20 glass hover-glow flex items-center justify-center gap-2">
              <Users className="h-5 w-5" /> See Who's Attending
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailModal;