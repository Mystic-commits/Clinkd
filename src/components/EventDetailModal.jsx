import React from "react";
import { Calendar, MapPin, Users, Heart } from "lucide-react";

const attendeeAvatars = [
  "😎", "🤩", "😊", "🥳", "🌟", "🎵", "🎸", "🎤", "🎧", "🔥"
];

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
};
const modalContentStyle = {
  background: '#23232a',
  borderRadius: 16,
  padding: 32,
  maxWidth: 480,
  width: '90%',
  color: '#fff',
  boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
};
const closeBtnStyle = {
  position: 'absolute',
  top: 16,
  right: 24,
  background: 'transparent',
  border: 'none',
  color: '#fff',
  fontSize: 24,
  cursor: 'pointer'
};

const EventDetailModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={{ ...modalContentStyle, position: 'relative' }} onClick={e => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{event.title}</h2>
        <div style={{ color: '#a3a3a3', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Calendar style={{marginRight: 4}} /> {event.date}
        </div>
        <div style={{ color: '#a3a3a3', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <MapPin style={{marginRight: 4}} /> {event.location}
        </div>
        <p style={{ marginBottom: 16 }}>{event.description}</p>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 600, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users /> Who's Attending
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {attendeeAvatars.slice(0, 5).map((avatar, idx) => (
              <span key={idx} style={{ fontSize: 24, background: '#18181b', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>{avatar}</span>
            ))}
            <span style={{ fontSize: 16, background: '#a855f7', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600 }}>
              +{Math.floor(Math.random() * 50) + 10}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <button style={{ flex: 1, background: '#a855f7', color: '#fff', border: 'none', borderRadius: 8, padding: '0.75rem 0', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Heart /> Add to Wishlist
          </button>
          <button style={{ flex: 1, background: '#23232a', color: '#fff', border: '1px solid #fff', borderRadius: 8, padding: '0.75rem 0', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Users /> See Who's Attending
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;