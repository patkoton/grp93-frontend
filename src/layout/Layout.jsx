import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Layout(props) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {props.children}
          <div className="p-6">
            <h2 className="text-2xl font-semibold">Welcome to Your Website!</h2>
            <p className="mt-4">This is your main content area.</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
