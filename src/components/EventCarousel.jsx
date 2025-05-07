import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './EventCarousel.css'

function EventCarousel() {
  const [animateItems, setAnimateItems] = useState(false)
  const carouselRef = useRef(null)
  
  const events = [
    {
      id: 1,
      title: 'Cognizant Tech Fest',
      date: 'June 15, 2024',
      location: 'IIT Roorkee',
      image: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'Neutron Fest',
      date: 'July 8, 2024',
      location: 'Rishi hood University',
      image: 'https://images.pexels.com/photos/1864640/pexels-photo-1864640.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      title: 'Rock & Roll',
      date: 'August 20, 2024',
      location: 'NIT Delhi',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Jazz in the Park',
      date: 'September 5, 2024',
      location: 'NSUT Delhi',
      image: 'https://images.pexels.com/photos/1652353/pexels-photo-1652353.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      title: 'Damru Fest',
      date: 'October 12, 2024',
      location: 'Rishi hood University',
      image: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      title: 'Classical Orchestra Night',
      date: 'November 18, 2024',
      location: 'IIT Mandi',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateItems(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section id="events" className="events-section">
      <div className="container" ref={carouselRef}>
        <h2 className={`section-title ${animateItems ? 'fade-in' : ''}`}>
          <span className="text-gradient">Upcoming</span> Events
        </h2>
        <p className={`section-subtitle ${animateItems ? 'fade-in' : ''}`}>
          Discover exciting college festivals and find your perfect event partner
        </p>
        
        <div className={`events-carousel ${animateItems ? 'fade-in' : ''}`}>
          <Slider {...sliderSettings}>
            {events.map((event) => (
              <div key={event.id} className="event-card-wrapper">
                <div className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <div className="event-details">
                      <div className="event-detail">
                        <FiCalendar />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <FiMapPin />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className={`events-cta ${animateItems ? 'fade-in-up' : ''}`}>
          <button className="btn">View All Events</button>
        </div>
      </div>
    </section>
  )
}

export default EventCarousel