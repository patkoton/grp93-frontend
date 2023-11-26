import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowCircleLeft, ArrowCircleRight, ArrowDown2, Diagram, Home2, LogoutCurve, Money, People, Receipt21, Setting2, StatusUp, UserOctagon } from 'iconsax-react';
import profile from '../assets/images/profile.png'
import SearchBar from './SearchBar';


const nav1 = [
  { name: 'Dashboard', href: '/dashboard', icon: <Home2 size="16" color="#FFF" /> },
  { name: 'Invoices', href: '/invoice', icon: <Receipt21 size="16" color="#FFF" variant="Bold" /> },
  { name: 'Customers', href: '/customer', icon: <People size="16" color="#FFF" /> },
  { name: 'Expenses', href: '/expense', icon: <StatusUp size="16" color="#FFF" /> },
  { name: 'Reporting', href: '/reporting', icon: <Diagram size="16" color="#FFF" /> },
]
const nav2 = [
  { name: 'Bling', href: '/bling', icon: <Money size="16" color="#FFF" />  },
  { name: 'Support', href: '/support', icon: <UserOctagon size="16" color="#FFF" /> },
  { name: 'Settings', href: '/setting', icon: <Setting2 size="16" color="#FFF" /> },
]


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <div className={`bg-dark-blue2 relative text-white p-4 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className={`${isOpen ? 'ml-0' : 'block ml-2'}`}>
        <button onClick={toggleSidebar}>
          {isOpen ? <ArrowCircleLeft size="16" color="#FFF" /> : <ArrowCircleRight size="16" color="#FFF" />}
        </button>
      </div>
      <div className={`${isOpen ? 'mt-4' : 'w-4'}`}>
          <div className={`flex justify-between items-center ${isOpen ? 'block' : 'hidden'}`}>
            <h4 className='text-base font-bold text-white'>OMOLUWABI</h4>
            <div className='flex items-center gap-1'>
              <img src={profile} alt="" />
              <button><ArrowDown2 size="16" color="#FFF" /></button>
            </div>
          </div>
          <div className={`mt-9 ${isOpen ? 'block' : 'hidden'}`}>
            <SearchBar onSearch={handleSearch} />
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
          {/* Top fixed links */}
          <div className="py-4 absolute top-36">
            {nav1.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({isActive}) => {
                  return 'block text-base font-normal text-white active:bg-nav-hover active:rounded-md' +
                  (isActive ? 'bg-nav-hover rounded-md' : 'bg-transparent')
                }}
              >
                <div className='flex items-center gap-4 py-2'>
                  <div className={`${isOpen ? 'block' : 'ml-2'}`}>{item.icon}</div>
                  <div className={`${isOpen ? 'block' : 'hidden'}`}>{item.name}</div>
                </div>
              </NavLink>
            ))}
          </div>

          {/* Bottom fixed links */}
          <div className="py-4 absolute bottom-0">
            {nav2.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({isActive}) => {
                  return 'block text-base font-normal' +
                  (isActive ? 'bg-nav-hover rounded-md text-white' : 'bg-transparent text-white')
                }}
              >
              <div className='flex items-center gap-4 py-2'>
                <div className={`${isOpen ? 'block' : 'ml-2'}`}>{item.icon}</div>
                <div className={`${isOpen ? 'block' : 'hidden'}`}>{item.name}</div>
              </div>
              </NavLink>
            ))}
            <div className='mt-12'>
              <NavLink 
                key='logout'
                to='/logout'
                className={({isActive}) => {
                  return 'text-base font-normal' +
                  (isActive ? 'bg-nav-hover rounded-md text-white' : 'bg-transparent text-white')
                }}
              >
              <div className='flex items-center gap-4 py-2'>
                <div className={`${isOpen ? 'block' : 'ml-2'}`}><LogoutCurve size="16" color="#FFF" /></div>
                <div className={`${isOpen ? 'block' : 'hidden'}`}>Logout</div>
              </div>
              </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
