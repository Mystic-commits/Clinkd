import { Mail, Phone, MapPin, Clock, User, MessageCircle, Tag, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="section contact-agency-section">
      <div className="contact-agency-bg" aria-hidden="true" />
      <div className="contact-agency-header">
        <h1 className="section-title" style={{textAlign: 'left'}}>
          Let's Connect
        </h1>
        <p className="section-subtitle" style={{textAlign: 'left', maxWidth: 520}}>
          We’re here for you. Reach out with questions, partnership ideas, or just to say hello—our team will get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-agency-grid">
        <div className="contact-agency-card contact-agency-form-card">
          <h2 className="contact-agency-card-title">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-agency-form-fields" autoComplete="off">
            <div className="contact-agency-form-row">
              <div className="contact-agency-input-group">
                <input id="firstName" type="text" required className="contact-agency-input" placeholder=" " autoComplete="off" />
                <label htmlFor="firstName" className="contact-agency-label">First Name</label>
              </div>
              <div className="contact-agency-input-group">
                <input id="lastName" type="text" required className="contact-agency-input" placeholder=" " autoComplete="off" />
                <label htmlFor="lastName" className="contact-agency-label">Last Name</label>
              </div>
            </div>
            <div className="contact-agency-input-group">
              <input id="email" type="email" required className="contact-agency-input" placeholder=" " autoComplete="off" />
              <label htmlFor="email" className="contact-agency-label">Email Address</label>
            </div>
            <div className="contact-agency-input-group">
              <input id="subject" type="text" required className="contact-agency-input" placeholder=" " autoComplete="off" />
              <label htmlFor="subject" className="contact-agency-label">Subject</label>
            </div>
            <div className="contact-agency-input-group">
              <textarea id="message" rows={5} required className="contact-agency-textarea" placeholder=" " autoComplete="off" />
              <label htmlFor="message" className="contact-agency-label">Message</label>
            </div>
            <button type="submit" className="contact-agency-btn">
              Send Message <ArrowRight style={{marginLeft: 8, verticalAlign: 'middle'}} size={18} />
            </button>
          </form>
        </div>
        {/* Vertical divider */}
        <div className="contact-agency-divider" aria-hidden="true" />
        {/* Contact Information */}
        <div className="contact-agency-card contact-agency-info-card">
          <h2 className="contact-agency-card-title">Contact Information</h2>
          <div className="contact-agency-info-list">
            <div className="contact-agency-info-item">
              <div className="contact-agency-info-icon"><Mail /></div>
              <div>
                <div className="contact-agency-info-title">Email</div>
                <div className="contact-agency-info-desc">yugjohri520@gmail.com</div>
                <div className="contact-agency-info-meta">We typically respond within 24 hours</div>
              </div>
            </div>
            <div className="contact-agency-info-item">
              <div className="contact-agency-info-icon"><Phone /></div>
              <div>
                <div className="contact-agency-info-title">Phone</div>
                <div className="contact-agency-info-desc">+91 7247076274</div>
                <div className="contact-agency-info-meta">Mon-Fri, 9 AM - 6 PM</div>
              </div>
            </div>
            <div className="contact-agency-info-item">
              <div className="contact-agency-info-icon"><MapPin /></div>
              <div>
                <div className="contact-agency-info-title">Location</div>
                <div className="contact-agency-info-desc">Delhi, India</div>
                <div className="contact-agency-info-meta">Serving students across India</div>
              </div>
            </div>
            <div className="contact-agency-info-item">
              <div className="contact-agency-info-icon"><Clock /></div>
              <div>
                <div className="contact-agency-info-title">Support Hours</div>
                <div className="contact-agency-info-desc">Mon-Fri: 9 AM - 6 PM</div>
                <div className="contact-agency-info-meta">Weekend support for urgent issues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;