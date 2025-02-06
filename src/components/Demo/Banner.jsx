import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-950 border-b border-black min-medium-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full px-2 py-20 flex flex-col items-center gap-4">
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center bg-bl">
          Welcome to SVTech
        </h1>
        <p className=" font-serif text-base sm:text-ellipsis md:text-xl lg:text-2x text-white text-center">
          At SVTech, we are committed to providing a cutting-edge education that seamlessly integrates software development with hardware engineering. Our curriculum is meticulously designed to equip students with the skills and knowledge necessary to excel in the dynamic tech industry.
          <br />
    
          Join us at SVTech to embark on a transformative educational journey that blends the art of software development with the science of hardware engineering, preparing you for a successful career in the tech industry.
        </p>
        <button className="text-[1.2rem]btn bg-black rounded-full text-white mt-10">
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default Banner;
