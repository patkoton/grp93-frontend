import { SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center relative">
    <button
        className="text-white absolute left-3"
        onClick={handleSearch}
      >
      <SearchNormal1 size="16" color="#FFF" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border border-search-border py-1 pl-10 pr-2 rounded-lg bg-search-back"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
