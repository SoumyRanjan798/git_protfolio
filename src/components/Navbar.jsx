import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        {/* Name, phone number, and email aligned vertically */}
        <div className='text-center md:text-left'>
          <div className='text-2xl font-bold'>Soumya Ranjan</div>
          <div className='text-sm mt-1'>
            <div>Phone: +91 6371763209</div>
            <div>Email: <a href="mailto:soumyaranjanoficial@gmail.com" className='hover:underline'>soumyaranjanoficial@gmail.com</a></div>
          </div>
        </div>

        {/* Navigation links */}
        <div className='space-x-6'>
          <Link to="/" className='hover:text-gray-600'>Home</Link>
          <Link to="/about" className='hover:text-gray-400'>About</Link>
          <Link to="/service" className='hover:text-gray-400'>Services</Link>
          <Link to="/projects" className='hover:text-gray-400'>Projects</Link>
          <Link to="/skills" className='hover:text-gray-400'>Skills</Link>
          <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
        </div>

        {/* Button to connect */}
        <button
          onClick={() => navigate('/contact')}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
