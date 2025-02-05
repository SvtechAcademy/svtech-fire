/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Modal = ({children}) => {
  return ( <>
    <div className='bg-white/50 fixed inset-0 z-10'/>
     {children}
     </>
  )
}

export default Modal
