import React from 'react'
import { HiOutlineMoon } from "react-icons/hi";
import { useCountryContext } from '../context/countriescontext'
const Mode = () => {
  // const {changeColor,color,setWhite}=useCountryContext()
  const {setColor,color}=useCountryContext()
  // const [white,setWhite]=useState('black')

  return (
    <>
        {/* <button type='button' onClick={()=>color==="white"?changeColor("black"):changeColor("white")} className={`${color}`}><HiOutlineMoon className='my-0'/> Dark Mode</button> */}
        <button type='button' onClick={()=>color==="white"?setColor('black'):setColor("white")} className='mode btn shadow-0'><HiOutlineMoon className='my-0'/> Dark Mode</button>
    </>
  )
}

export default Mode