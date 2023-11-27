import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Layout(props) {
  

  return (
    <div className="flex h-screen font-worksans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className='w-full h-[0.3px] bg-border-line2'></div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
