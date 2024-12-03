import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      title: 'Premium Courses',
      description: 'Learn from industry experts',
    },
    {
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db',
      title: 'Study Materials',
      description: 'Access quality notes and resources',
    },
    {
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28',
      title: 'Coding Resources',
      description: 'Explore our vast collection of code snippets',
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}