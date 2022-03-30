import React from 'react';
import logo from '../logo.svg';
import Button from './Button';
import Hero from './Hero';

const Navbar = () => {
  return (
    <header className="bg-pattern-header bg-bottom-custom bg-no-repeat bg-120% md:bg-right-custom lg:bg-80% lg:bg-right-custom2">
      <div className="container mx-auto mb-20 lg:px-6">
        <nav className="py-10 flex justify-center items-center md:justify-start md:px-8 md:py-24">
          <img src={logo} alt="" />
        </nav>

        <Hero />
      </div>
    </header>
  );
};

export default Navbar;
