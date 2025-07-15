import React from 'react';
import { Link } from 'react-router-dom';
interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  image
}) => {
  return <Link to={`/products?category=${id}`} className="block group">
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <div className="h-40 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white font-medium text-lg p-4 w-full text-center">
            {name}
          </h3>
        </div>
      </div>
    </Link>;
};
export default CategoryCard;