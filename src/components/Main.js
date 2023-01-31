import React from 'react'
import Filters from './Filters'

import "../css/Common.css"
import Cards from './Cards'
const Main = () => {

  
  return (
    <>
        <section className= 'section py-2'>
        <div className="container-lg container-fluid ">
        <Filters />

        <Cards/>
        
        </div>
    
        </section>
    </>
  )
}

export default Main