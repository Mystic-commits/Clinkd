import axios from "axios";

const TICKETMASTER_API_KEY = "gQDu76nSXdvhrLvci6c2MiI558a1hiB3"; // User's provided key
const TICKETMASTER_API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

export const eventsAPI = {
  async fetchEvents() {
    try {
      const res = await axios.get(TICKETMASTER_API_URL, {
        params: {
          apikey: TICKETMASTER_API_KEY,
          countryCode: "US", // Changed to US for demo events
          size: 12,
          sort: "date,asc"
        }
      });
      const events = res.data._embedded?.events || [];
      return events.map((ev) => ({
        id: ev.id,
        title: ev.name,
        image:
          ev.images?.find((img) => img.width >= 600)?.url ||
          ev.images?.[0]?.url ||
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
        date: ev.dates?.start?.localDate || "TBA",
        location:
          ev._embedded?.venues?.[0]?.name +
          (ev._embedded?.venues?.[0]?.city?.name ? ", " + ev._embedded.venues[0].city.name : "") ||
          "TBA",
        description: ev.info || ev.pleaseNote || "No description available."
      }));
    } catch (err) {
      console.error("Error fetching events from Ticketmaster API:", err);
      return [];
    }
  }
};