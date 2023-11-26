import React, { useState } from 'react';
import SearchBar2 from './SearchBar2';
import { NotificationBing } from 'iconsax-react';

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);
  const allItems = [
    { id: 1, name: 'Invoice' },
    { id: 2, name: 'Product' },
    { id: 3, name: 'Customer' }
  ];

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Perform search logic here
    const results = allItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update searchResults state
    setSearchResults(results);
  };

  return (
    <header className="bg-white text-gray p-4">
      <div className='flex justify-between items-center'>
        <div className='w-full'>
          <SearchBar2 onSearch={handleSearch} />
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          ) : (
            <p> </p>
          )}
        </div>
        <button>
          <NotificationBing size="16" color="var(--gray-700, #272D37)" />
        </button>
      </div>
    </header>
  );
};

export default Header;
