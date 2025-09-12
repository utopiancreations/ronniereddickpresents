import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-4 page-fade-in">
        <div className="centered-layout">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
