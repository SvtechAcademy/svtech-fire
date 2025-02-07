import React from 'react';
import Banner from './Banner'; // Adjust the path as necessary
import Trending from './Trending';
import Posts from '../Common/Posts/Posts';
import Discover from './Discover';

const Demo = () => (
  <>
    <Banner />
    <Trending />
    <div className='siz py-7 flex flex-col-reverse md:flex-row gap-[7rem]'>
    <div className='flex-[1.5rem]'>
      <Posts/>
    </div>
    <div className='flex-[1] full relative'>
      <Discover/>
    </div>
    </div>

  </>
);

export default Demo;
