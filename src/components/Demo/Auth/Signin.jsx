/* eslint-disable no-unused-vars */
import React from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Signin = ({setSignReq}) => {
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-8rem)] bg-blue-900 px-4'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md sm:w-full sm:px-6 sm:py-8'>
        <h1 className='text-3xl font-semibold text-center text-gray-800'>Sign in with Email</h1>
        <p className='text-center text-gray-600 mt-2'>
          Please enter the correct email associated with your account.
        </p>
        <form className='mt-6 space-y-4'>
          <div>
            <label htmlFor='email' className='block text-gray-700 font-medium'>Email</label>
            <input 
              type='email' 
              id='email' 
              title='email' 
              className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none' 
              placeholder='Enter your email' 
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-700 font-medium'>Password</label>
            <input 
              type='password' 
              id='password' 
              title='password' 
              className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none' 
              placeholder='Enter your password' 
            />
          </div>
          <button 
            className='px-12 py-3 text-sm rounded-full bg-green-700 hover:bg-green-900 text-white w-fit mx-auto '>
            Sign in
          </button>
          <button onClick={() => setSignReq("")} className='px-5 py-1 text-sm rounded-full bg-green-700 hover:bg-green-900 text-white w-fit mx-auto'><BsFillArrowLeftCircleFill />All Sign in Option</button>
        </form>
       
      </div>
    </div>
  );
};

export default Signin;
