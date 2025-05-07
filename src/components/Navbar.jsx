import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const [animateItems, setAnimateItems] = useState(false)

  useEffect(() => {
    setAnimateItems(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${animateItems ? 'animate' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="text-gradient">Clikd</span> Fest
        </a>
        
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li className="nav-item fade-delay-1"><a href="#home">Home</a></li>
          <li className="nav-item fade-delay-2"><a href="#events">Events</a></li>
          <li className="nav-item fade-delay-3"><a href="#about">About</a></li>
          <li className="nav-item fade-delay-4"><a href="#contact">Contact</a></li>
        </ul>
        
        <button className="btn navbar-cta">Book Now</button>
      </div>
    </nav>
  )
}

export default Navbar