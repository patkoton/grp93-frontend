import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-700 text-white p-4 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button className="text-white" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className={isOpen ? 'mt-4' : 'hidden'}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
