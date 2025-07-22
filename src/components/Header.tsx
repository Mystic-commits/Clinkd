import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/ProfileDropdown";
import { Music } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-neutral-800">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-white">
              Clikd Fest
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/") ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/events") ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Events
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/about") ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/contact") ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;