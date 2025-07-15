import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };
  return <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <input type="text" placeholder="Search for products..." value={query} onChange={e => setQuery(e.target.value)} className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        <button type="submit" className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-green-600 transition duration-300">
          <SearchIcon size={20} />
        </button>
      </div>
    </form>;
};
export default SearchBar;