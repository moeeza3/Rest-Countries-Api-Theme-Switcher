import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams,useLocation } from "react-router-dom";
import Header from '../components/Header';
import Back from '../components/Back'
import Detail from '../components/Detail';
import "../css/Common.css"
import { useCountryContext } from '../context/countriescontext'
const Country = () => {

  // const API="https://restcountries.com/v3.1/all";
  const {color}=useCountryContext()
 
 const param=useParams();
//  console.log(param.name)
 /*  const {name:{common}}=singleCountry
 const index=useLocation()
 console.log(index)
 console.log(common) */
  // const {name}=useParams();
  // useEffect(()=>{
  //   getSingleCountry(`${API}?name=${name.common}`);
  // },[]); 
   const [data,setData]=useState([])
  const fetchData=async()=>{
  const resp=await axios.get(`https://restcountries.com/v3.1/name/${param.name}`);
const dataavilable=resp.data;


 setData(dataavilable)
//     // console.log(dataavilable.map(cur=>cur.name.common))
   }
  
  
const us=  useEffect(()=>{
   
  fetchData()
   },[])

  // console.log(data.map(cur=>cur.name.common))

  //  console.log(d.map(cur=>cur.name.common))


  // console.log(dataavilable.map(cur=>cur.name.common))
   
//  console.log(singleCountry);

  return (
    <>
      <div className={`home ${color}`}>
       <Header/>
       <section className='country-section py-4'>
        <div className="container-lg container-fluid ">
        <Back/>

         <Detail detail={data} />
        
        </div>
    
        </section>
    </div>
    </>
  )
}

export default Country