import React from 'react';

const Trending = () => {
  return (
    <div className="bg-blue-950 border-b border-black min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full px-4 py-20 flex flex-col items-center gap-4">
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center bg-bl"></h1>
          Welcome to SVTech

        <button className="text-[1.2rem]btn bg-black rounded-full text-white mt-10">
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default Trending;
