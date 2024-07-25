'use client';
import React, { useState } from 'react';

type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

type Item = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

const categories: Category[] = [
  { id: 1, name: 'Fruits', imageUrl: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Vegetables', imageUrl: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Dairy', imageUrl: 'https://via.placeholder.com/100' },
];

const items: Item[] = [
  { id: 1, categoryId: 1, name: 'Apple', description: 'A red apple', imageUrl: 'https://via.placeholder.com/150', price: 1.99 },
  { id: 2, categoryId: 1, name: 'Banana', description: 'A ripe banana', imageUrl: 'https://via.placeholder.com/150', price: 0.99 },
  { id: 3, categoryId: 2, name: 'Carrot', description: 'A fresh carrot', imageUrl: 'https://via.placeholder.com/150', price: 0.69 },
  { id: 4, categoryId: 2, name: 'Lettuce', description: 'A green lettuce', imageUrl: 'https://via.placeholder.com/150', price: 1.29 },
  { id: 5, categoryId: 3, name: 'Milk', description: 'A carton of milk', imageUrl: 'https://via.placeholder.com/150', price: 2.49 },
  { id: 6, categoryId: 3, name: 'Cheese', description: 'A block of cheese', imageUrl: 'https://via.placeholder.com/150', price: 3.99 },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems = selectedCategory
    ? items.filter(item => item.categoryId === selectedCategory)
    : [];

  return (
    <div className="container w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="cursor-pointer flex flex-col items-center"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <span className={`text-sm ${selectedCategory === category.id ? 'text-orange-400' : ''}`}>
              {category.name}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="mb-4 p-4 border rounded-lg">
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="mb-2">{item.description}</p>
              <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">Select a category to see items.</p>
        )}
      </div>
    </div>
  );
}
