import React from 'react';
import { CardProps } from '@/interfaces';
// import Image from 'next/image';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  rating,
  onClick,
}) => {
  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img 
        src="/assets/patrick.jpg"
        alt={title} 
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">${price}/night</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;