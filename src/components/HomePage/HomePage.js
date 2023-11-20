import React, { useState, useEffect, useMemo } from 'react';
import Nav from '../Nav/Nav';
import Slider from 'react-slick';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //initialization of 'settings' is wrapped in useMemo
  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 4 : 2,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  }), []); // Dependency array is emptied

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Dependency array is emptied to run just once.

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-page-container">
      <Nav />
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide-item">
            <img src="../Images/profile1.jpg" /*alt="@"*/ />
          </div>
          <div className="slide-item">
            <img src="../Images/Screenshot (2).png" /*alt="$"*/ />
          </div>
        </Slider>
        <div className="dots-container">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      {/* my Page Content*/}
    </div>
  );
}

export default HomePage;

