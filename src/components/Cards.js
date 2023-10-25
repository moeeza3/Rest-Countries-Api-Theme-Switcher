import React from 'react'
import { useCountryContext } from '../context/countriescontext'
import { NavLink } from 'react-router-dom'

const Cards = () => {
       
    const {filtercountries}=useCountryContext()
    
    
    // const width="250px";
    

  return (
    <>
        <div className='row py-4 card-section mb-4' >
  <div className="d-flex flex-wrap justify-content-lg-between justify-content-around">
    
      {
        filtercountries.slice(0,8).map((curElem,index)=>{
          
            return (
              
              <NavLink to={`/country/${curElem.name.common}`}  location={curElem}>
              
               <div className='card short-card my-3 border-0' key={index}>
               <div className="img-container">
               <img src={curElem.flags.svg} className="img-fluid" alt={curElem.name.common}/>
               </div>
              
               <div className="card-body py-4">
               <div className="card-title">{curElem.name.common}</div>
               <div className="card-text ">Population: <span>{curElem.population}</span></div>
               <div className="card-text py-1">Region: <span>{curElem.region}</span></div>
               <div className="card-text ">Capital: <span>{curElem.capital}</span></div>
               </div>
               </div>
               </NavLink>
            )
        })
      }
    
  </div>
  
</div>
    </>
  )
}

export default Cards