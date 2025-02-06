/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Input = ({type,title}) => {
  return (
    <div className='flex flex-col gap-2'>
    <label className='text-capitalize'>{title}</label> 
    <input className='text-center border-b border-black outline-none' type={type} name={title} />
    </div>
  )
}

export default Input
