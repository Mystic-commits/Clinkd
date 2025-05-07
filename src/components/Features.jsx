import { useEffect, useRef, useState } from 'react'
import { FiMusic, FiZap, FiUsers, FiCalendar } from 'react-icons/fi'
import './Features.css'

function Features() {
  const featuresRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const features = [
    {
      id: 1,
      icon: <FiMusic size={24} />,
      title: 'Top Artists',
      description: 'Experience performances from world-renowned artists and emerging talents.'
    },
    {
      id: 2,
      icon: <FiZap size={24} />,
      title: 'Immersive Experience',
      description: 'Cutting-edge sound, lighting, and visual effects for a complete sensory experience.'
    },
    {
      id: 3,
      icon: <FiUsers size={24} />,
      title: 'Community',
      description: 'Connect with like-minded people who share your passion for music and culture.'
    },
    {
      id: 4,
      icon: <FiCalendar size={24} />,
      title: 'Year-Round Events',
      description: 'From summer festivals to intimate winter concerts, we\'ve got your calendar covered.'
    }
  ]
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }
    
    return () => {
      if (featuresRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section className="features-section" ref={featuresRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Why Choose <span className="text-gradient">Clikd Fest</span>
        </h2>
        <p className={`section-subtitle ${isVisible ? 'fade-in' : ''}`}>
          We create unforgettable experiences that bring people together through music and art
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-card stagger-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features