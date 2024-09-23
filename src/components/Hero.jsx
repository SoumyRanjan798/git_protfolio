import React from 'react';
import HeroImage from '../assets/hero-image.png'; // Make sure the path is correct

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt="Profile"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-white'>
          Soumya Ranjan Rout
        </h1>
        <h2 className='text-2xl font-semibold text-white mt-2'>
          Software Engineer
        </h2>
      </div>
      <div className='mt-8 space-x-4'>
        <button
          onClick={() => window.open('http://linkedin.com/in/soumya-ranjan-rout-63744b288', '_blank')}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact With Me
        </button>
        <a
          href="/SoumyaCV.pdf"
          download="SoumyaCV.pdf"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
