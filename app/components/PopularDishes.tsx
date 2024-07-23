import React from 'react';
import { ShoppingCart, Star, StarIcon } from 'lucide-react';

type Dish = {
  id: number;
  name: string;
  rating: number;
  imageUrl: string;
  description: string;
};

type Props = {};

const dummyDishes: Dish[] = [
  { id: 1, name: 'Pizza Margherita', rating: 4.5, imageUrl: 'https://i.pinimg.com/564x/e9/40/04/e94004266e021d839622be78f04aedc4.jpg', description: 'Classic pizza with tomatoes, mozzarella cheese, and fresh basil.' },
  { id: 2, name: 'Spaghetti Carbonara', rating: 4.8, imageUrl: 'https://i.pinimg.com/736x/7e/55/c2/7e55c2115b6ee80751edfb6343220a32.jpg', description: 'Traditional Italian pasta dish with eggs, cheese, pancetta, and pepper.' },
  { id: 3, name: 'Caesar Salad', rating: 4.3, imageUrl: 'https://i.pinimg.com/564x/06/a3/5d/06a35d78c872abbd447d0d8cdf8ea408.jpg', description: 'Crisp romaine lettuce, croutons, and Parmesan cheese, tossed with Caesar dressing.' },
];

const getStarRating = (rating: number) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <>
      {Array.from({ length: filledStars }, (_, index) => (
        <Star key={`filled-${index}`} size={16} className="text-yellow-500" />
      ))}
      {hasHalfStar && (
        <StarIcon
          key="half"
          size={16}
          className="text-yellow-500"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
      )}
      {Array.from({ length: maxStars - filledStars - (hasHalfStar ? 1 : 0) }, (_, index) => (
        <Star key={`empty-${index}`} size={16} className="text-gray-300" />
      
      ))}
    </>
  );
};

const PopularDishes: React.FC<Props> = () => {
  return (
    <div className="w-full py-8 flex flex-col items-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Popular Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {dummyDishes.map(dish => (
          <div key={dish.id} className="bg-white shadow-lg w-72 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
<img 
  src={dish.imageUrl} 
  alt={dish.name} 
  className="w-full h-48 rounded-t-[1pc] object-cover object-center"
/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{dish.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-lg font-semibold">
                  {getStarRating(dish.rating)}
                </div>
                <button className="text-orange-500 hover:text-orange-700 transition-colors">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-orange-500 rounded-[1pc] text-white px-6 py-2 hover:bg-orange-600 transition-colors">
          See All Dishes
        </button>
      </div>
    </div>
  );
};

export default PopularDishes;
