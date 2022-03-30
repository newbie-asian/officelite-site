import React from 'react';
import Button from './Button';
import heroImage from '../assets/images/home/illustration-charts.svg';

const Hero = () => {
  return (
    <section className="hero text-center px-6 my-10 flex flex-col items-center md:flex-row lg:mt-0 lg:justify-between md:px-8">
      <div className="hero__img max-w-[50%] mb-6 md:order-2 md:basis-[45%] lg:basis-[40%] md:max-w-none md:mb-0 md:mx-4">
        <img src={heroImage} className="" alt="" />
      </div>
      <div className="hero__details md:order-1 md:basis-[55%] lg:basis-[50%] md:text-left">
        <h1 className="font-kumbh-bold text-xl text-dark-violet xl:text-2xl">A simple solution to complex tasks is coming soon</h1>
        <p className="font-kumbh-regular text-xs text-pale-violet my-5 xl:text-sm ">
          Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>

        <Button name="Get Started" />
      </div>
    </section>
  );
};

export default Hero;
