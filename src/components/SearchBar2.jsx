import { SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';

const SearchBar2 = ({ onSearch }) => {
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
      <SearchNormal1 size="16" color="#B2B0B0" />
      </button>
      <input
        type="text"
        placeholder="Search by client, invoice number, etc"
        className="w-full py-1 pl-10 pr-2 rounded-lg bg-transparent outline-none placeholder:text-light-gray2 placeholder:text-xs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar2;
