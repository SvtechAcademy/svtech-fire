/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import svtechLogo from '/src/asset/svtech.webp';
import Auth from './Auth/Auth';

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollMe = () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", scrollMe);

    return () => {
      window.removeEventListener("scroll", scrollMe);
    };
  }, []);

  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <header className={`border-b border-black sticky top-0 z-50 transition-all duration-300 ${isActive ? "bg-black shadow-lg" : "bg-blue-900"}`}>
      <div className='size h-[70px] flex items-center justify-between px-4 md:px-8'>
        <Link to="/">
          <img className='h-[2.5rem]' src={svtechLogo} alt="SVTech Logo" />
        </Link>
        <div className='flex items-center gap-5'>
          <nav className='hidden text-sm sm:flex items-center gap-5'>
            {links.map((link, i) => (
              <Link key={i} to={link.path} className="text-white hover:text-gray-300">
                {link.title}
              </Link>
            ))}
          </nav>
          <button className='hidden text-sm sm:flex items-center gap-5 text-white hover:text-gray-300'>
            Sign In
          </button>
          <Auth />
          <button className={`text-white rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? "bg-green-700 hover:bg-green-600" : "bg-blue-700 hover:bg-blue-600"}`}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
