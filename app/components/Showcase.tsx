'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {}

const images = [
  { 
    id: 1, 
    src: 'https://i.pinimg.com/564x/b0/37/cf/b037cf4b84a9f217b5576d07d4011f6a.jpg', 
    alt: 'Image 1', 
    title: 'First Image Title', 
    description: 'This is the first image description.', 
    buttonText: 'Learn More' 
  },
  { 
    id: 2, 
    src: '/cool.jpeg', 
    alt: 'Image 2', 
    title: 'Second Image Title', 
    description: 'This is the second image description.', 
    buttonText: 'Discover' 
  },
  { 
    id: 3, 
    src: 'https://i.pinimg.com/564x/70/77/16/7077161cdb252c166a4ac4be69a59760.jpg', 
    alt: 'Image 3', 
    title: 'Third Image Title', 
    description: 'This is the third image description.', 
    buttonText: 'Find Out More' 
  },
  { 
    id: 4, 
    src: '/cool.jpeg', 
    alt: 'Image 4', 
    title: 'Fourth Image Title', 
    description: 'This is the fourth image description.', 
    buttonText: 'See Details' 
  },
];

export default function Showcase({}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl overflow-hidden w-full p-10 pt-0 mx-auto h-full">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id} className="relative flex h-64 md:h-80 lg:h-96 items-center">
            <div className="absolute w-full h-full bg-black bg-opacity-30 text-white p-4 flex flex-col items-center justify-center rounded-[2pc]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{image.title}</h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-4">{image.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{image.buttonText}</button>
            </div>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center rounded-[2pc]" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
