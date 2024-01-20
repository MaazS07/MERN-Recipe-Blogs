// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './stylesheets/Carousel.css'; // Add a separate CSS file for styling

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // Placeholder image URLs
  const imageUrls = Array.from({ length: 12 }, (_, index) => `https://via.placeholder.com/800x320?text=Image${index + 1}`);

  return (
    <div className="carousel-container">
      <h2>React Slick Carousel Example</h2>
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => <div {...props} className="custom-arrow prev-arrow" />;
const CustomNextArrow = (props) => <div {...props} className="custom-arrow next-arrow" />;

export default Carousel;
