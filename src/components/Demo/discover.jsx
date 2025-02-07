import React from 'react';
import { discover, discoverActions } from '../../Data';

const Discover = () => {
  return (
    <div className="sticky top-[6rem]">
      <div className="border-b border-gray-400 pb-7">
        <h2 className="font-semibold text-black">Discover More of What Matters to You</h2>
        <div className="my-2 flex items-center gap-3 flex-wrap">
          {discover.map((item, i) => (
            <button
              className="bg-blue-900 py-2 px-3 text-sm rounded-full text-white hover:bg-green-600"
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="text-green-600 text-sm py-3 hover:text-black rounded-full">
          See More Topics
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-3 pt-8">
        {discoverActions.map((item, i) => (
          <button key={i} className="text-md text-black">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Discover;
