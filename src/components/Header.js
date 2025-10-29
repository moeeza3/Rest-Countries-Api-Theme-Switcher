import React from 'react'
import "../css/Common.css"
import Mode from './Mode'
import { useCountryContext } from '../context/countriescontext'
const Header = () => {
  const {color}=useCountryContext();
  return (
    <>
         <header className={`${color} headers py-3 shadow`}>
             <div className="container-lg container-fluid d-flex justify-content-between align-items-center py-0 ">
             <h4 className='mb-0'>Where in the World?</h4>
            <Mode/>
             </div>
            
        </header>
    </>
  )
}

export default Header