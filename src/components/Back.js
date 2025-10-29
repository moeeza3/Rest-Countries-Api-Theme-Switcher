import React from 'react'
import '../css/Common.css'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
const Back = () => {
  return (
    <>
       <div className='mt-5'>
       <NavLink to="/" className="back  ms-lg-0 mt-5 mb-2 px-4 py-2 rounded-2 "><HiOutlineArrowNarrowLeft className='icon'/> Back</NavLink>
       </div>
    </>
  )
}

export default Back