import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
          <span className="text-gradient">Upcoming</span> Events
        </h1>
        <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
          Discover and book tickets for the hottest festivals and concerts
        </p>
        <div className={`hero-cta ${isVisible ? 'visible' : ''}`}>
          <button className="btn btn-large">
            Find Your Event Partner <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-bg"></div>
    </section>
  )
}

export default Hero