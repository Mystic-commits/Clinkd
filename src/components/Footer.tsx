import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card-dark border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                Clikd Fest
              </span>
            </Link>
            <p className="text-neutral-400">
              Connecting college students with festival partners
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Site Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-400 hover:text-white">Home</Link></li>
              <li><Link to="/events" className="text-neutral-400 hover:text-white">Events</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Partner Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>yugjohni520@gm.com</li>
              <li>+91 7247076274</li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-xs">
          © {new Date().getFullYear()} Clikd Fest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;