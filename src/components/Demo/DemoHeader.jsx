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

  // Define the links array here
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
   
    // Add more links as needed
  ];

  return (
    <header className={`border-b border-black sticky top-0 z-50 ${isActive ? "bg-slate-50" : "bg-banner"}`}>
      <div className='size h-[70px] flex items-center justify-between'>
        <Link to="/">
          <img className='h-[2.5rem]' src={svtechLogo} alt="SVTech Logo" />
        </Link>
        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {links.map((link, i) => (
              <Link key={i} to={link.path} className="mr-4">
                {link.title}
              </Link>
            ))}
          </div>
          <div className='relative'>
            {/* Add any content here if needed */}
          </div>
          <button className='hidden text-sm sm:flex items-center gap-5'>sign in
          </button>
          <Auth/>
          <button className={` text-white rounded-full px-3 p-2 text-sm font-medium ${isActive ? "bg-green-700" : "bg-black"}`}>
  Get started
</button>

        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
