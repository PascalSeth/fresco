import React from 'react';

type Props = {};

type Image = {
  id: number;
  src: string;
  alt: string;
};

const images: Image[] = [
  { id: 1, src: 'https://i.pinimg.com/236x/a0/96/b8/a096b86bafdf4add636b395320dfcbd5.jpg', alt: 'Dish 1' },
  { id: 2, src: 'https://i.pinimg.com/474x/61/3d/0f/613d0fde3d5d3c8470d22b407df208fa.jpg', alt: 'Dish 2' },
  { id: 3, src: 'https://i.pinimg.com/236x/fc/0b/fd/fc0bfd95b0fcbaec4e7b7a73d3f5a8a0.jpg', alt: 'Dish 3' },
  { id: 4, src: 'https://i.pinimg.com/236x/62/35/11/6235110b3e710f3628878ef3aedc04ef.jpg', alt: 'Dish 2' },
];

const Intro: React.FC<Props> = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto p-8 lg:p-12">
      {/* Text Section */}
      <div className="flex-1 mb-8 lg:mb-0 lg:pr-4 flex flex-col items-center lg:items-start">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-4 text-center lg:text-left">
          Welcome to <span className='text-orange-400'>Fresco</span>
        </h1>
        <p className="font-semibold sm:text-lg md:text-xl text-black mb-6 text-center lg:text-left">

        Welcome to Fresco Restaurant, where we offer distinctive cuisine in a warm and inviting setting. Renowned for our impeccable service, elegant décor, and exquisite dishes, our restaurant provides an exceptional dining experience. Enjoy the vibrant flavors and rich atmosphere that make every visit memorable.        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-orange-500 rounded-[1pc] text-white font-semibold px-6 py-3 hover:bg-orange-600 transition-colors">
            Explore Our Menu
          </button>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex-1 flex justify-center items-center lg:justify-end">
        <div className="relative flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-end">
          {images.map((image) => (
            <div
              key={image.id}
              className={`w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg transition-transform transform hover:scale-110`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
