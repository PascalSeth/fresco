import React from 'react';

type Image = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

const images: Image[] = [
  { id: 1, src: 'https://i.pinimg.com/236x/eb/32/f1/eb32f1c8af5b2c56a8e161f362124258.jpg', alt: 'Dish 1', title: 'Dish 1' },
  { id: 2, src: 'https://i.pinimg.com/236x/23/11/a6/2311a65bd19841a7b43287a3bceb3ba7.jpg', alt: 'Dish 2', title: 'Dish 2' },
  { id: 3, src: 'https://i.pinimg.com/236x/76/9c/22/769c2277497b6157cb333c73c696afbc.jpg', alt: 'Dish 3', title: 'Dish 3' },
  { id: 4, src: 'https://i.pinimg.com/236x/d5/5b/8b/d55b8bf08f4ba29545ef9d3ba236273d.jpg', alt: 'Dish 4', title: 'Dish 4' },
  { id: 5, src: 'https://i.pinimg.com/236x/0c/64/78/0c647885a5a06c20e06736ae7f487fcb.jpg', alt: 'Dish 5', title: 'Dish 5' },
  { id: 6, src: 'https://i.pinimg.com/236x/b5/cd/a5/b5cda55de4c633f5b5836d452a0d16fd.jpg', alt: 'Dish 6', title: 'Dish 6' },
];

const Gallery: React.FC = () => {
  return (
    <div className="w-full py-8 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-8">
        {images.map(image => (
          <div key={image.id} className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-[1pc] transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="bg-orange-500 rounded-[1pc] hover:bg-orange-600 text-white font-semibold px-6 py-3  transition-colors"
      >
        View All
      </a>
    </div>
  );
};

export default Gallery;
