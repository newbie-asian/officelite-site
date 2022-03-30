import React from 'react';
import Button from './Button';
import Timer from './Timer';

const Footer = () => {
  return (
    <footer className="bg-darker-violet bg-pattern-footer bg-no-repeat bg-bottom bg-250% h-[72rem] md:-mt-[36rem] md:h-[65rem] lg:-mt-[18rem] lg:h-[42rem] md:bg-200% md:bg-bottom-custom2 lg:bg-custom lg:bg-150% flex flex-col justify-end items-center -mt-[45rem]">
      <div className="container mx-auto my-16 text-center lg:flex lg:justify-between lg:items-center px-6 lg:px-12">
        <Timer />
        <Button name="Get Started" />
      </div>
    </footer>
  );
};

export default Footer;
