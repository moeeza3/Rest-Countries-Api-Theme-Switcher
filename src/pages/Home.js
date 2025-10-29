import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import "../css/Common.css"
import { useCountryContext } from '../context/countriescontext'
const Home = () => {
  const {color}=useCountryContext()
  return (
    <div className={`home ${color}`}>
       <Header/>
        <Main/>
        
    </div>
  )
}

export default Home