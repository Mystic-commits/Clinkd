import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/" className="logo">
              <span className="text-gradient">Clikd</span> Fest
            </a>
            <p>Connecting college students with festival partners</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Site Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Partner Guide</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="mailto:info@clikdfest.com">yugjohri520@gm.com</a></li>
                <li><a href="tel:+919876543210">+91 7247076274</a></li>
                <li>Delhi, India</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-link"><FiInstagram /></a>
            <a href="#" className="social-link"><FiTwitter /></a>
            <a href="#" className="social-link"><FiFacebook /></a>
            <a href="#" className="social-link"><FiYoutube /></a>
          </div>
          
          <div className="copyright">
            &copy; {currentYear} Clikd Fest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer