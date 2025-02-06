import React, { useState, useEffect, useRef } from 'react';

const Trending = () => {
  const [isSticky, setIsSticky] = useState(false);
  const trendingRef = useRef(null);
  const discoverRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust this value as needed
    );

    if (discoverRef.current) {
      observer.observe(discoverRef.current);
    }

    return () => {
      if (discoverRef.current) {
        observer.unobserve(discoverRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={trendingRef}
      className={`transition-all duration-300 ${isSticky ? 'fixed top-0' : 'relative'}`}
    >
      {/* Trending content */}
    </div>
  );
};

export default Trending;
