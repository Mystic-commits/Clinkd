import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="contact-title-purple">Contact</span> Us
        </h1>
        <p className="contact-subtitle">
          Have questions about events, partnerships, or need support? We'd love to hear from you!
        </p>
      </div>
      <div className="contact-main-grid">
        {/* Contact Form */}
        <div className="contact-card">
          <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form-fields">
            <div className="contact-form-row">
              <div>
                <label htmlFor="firstName" className="contact-label">First Name</label>
                <Input id="firstName" type="text" placeholder="Your first name" required className="contact-input" />
              </div>
              <div>
                <label htmlFor="lastName" className="contact-label">Last Name</label>
                <Input id="lastName" type="text" placeholder="Your last name" required className="contact-input" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="contact-label">Email Address</label>
              <Input id="email" type="email" placeholder="your.email@example.com" required className="contact-input" />
            </div>
            <div>
              <label htmlFor="subject" className="contact-label">Subject</label>
              <Input id="subject" type="text" placeholder="What's this about?" required className="contact-input" />
            </div>
            <div>
              <label htmlFor="message" className="contact-label">Message</label>
              <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} required className="contact-textarea" />
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
        {/* Contact Information */}
        <div className="contact-card">
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon"><Mail className="h-6 w-6" /></div>
              <div className="contact-info-content">
                <h3>Email</h3>
                <p>yugjohri520@gmail.com</p>
                <p style={{fontSize: '0.95rem'}}>We typically respond within 24 hours</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><Phone className="h-6 w-6" /></div>
              <div className="contact-info-content">
                <h3>Phone</h3>
                <p>+91 7247076274</p>
                <p style={{fontSize: '0.95rem'}}>Available Monday to Friday, 9 AM - 6 PM</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><MapPin className="h-6 w-6" /></div>
              <div className="contact-info-content">
                <h3>Location</h3>
                <p>Delhi, India</p>
                <p style={{fontSize: '0.95rem'}}>Serving students across India</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><Clock className="h-6 w-6" /></div>
              <div className="contact-info-content">
                <h3>Support Hours</h3>
                <p>Monday - Friday: 9 AM - 6 PM</p>
                <p style={{fontSize: '0.95rem'}}>Weekend support available for urgent issues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;