import React from 'react'
import Filters from './Filters'

import "../css/Common.css"
import Cards from './Cards'
const Main = () => {

  
  return (
    <>
        <section className='section py-2'>
        <div className="container-lg container-fluid ">
        <Filters />

        <Cards/>
        
        </div>
      <div className="text-center mt-5 py-3" style={{ fontFamily: "Poppins, sans-serif", color:"#bda403ff" }}>
  <p className="mb-0">
    Explore more tools & projects at{" "}
    <a
      href="https://zelipho.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#e89f03ff", fontWeight: 500, textDecoration: "none" }}
    >
      Zelipho.com
    </a>
  </p>
</div>

        </section>
    </>
  )
}

export default Main