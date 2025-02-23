import React from 'react';
import Navbar from './navbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;