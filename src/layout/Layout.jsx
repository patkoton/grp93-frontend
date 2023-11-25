import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Layout(props) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
