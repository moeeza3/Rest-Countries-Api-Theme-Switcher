import React from 'react'
import "../css/Common.css"
import { AiOutlineSearch } from "react-icons/ai";
import { useCountryContext } from '../context/countriescontext'
const Filters = () => {
  const {filters:{text,region},countries,updateFilterValue,color}=useCountryContext();

  const regions = ["Filter by Region",...new Set(countries.map((m) => m.region)).values()];
  return (
    <div className={`${color}`}>
    <div className="d-flex flex-md-row  flex-column justify-content-lg-between justify-content-around mt-5 mb-2 form-main-div ">
        <form action="" className='col-sm-12 col-md-7 col-lg-5 ' onSubmit={(e) => e.preventDefault()}>
        <div className="input-group ">
  <span className="input-group-text rounded-0 border-0 ps-4" id="addon-wrapping"><AiOutlineSearch/></span>
  <input type="text" className="form-control rounded-0 border-0" value={text} name="text" onChange={updateFilterValue} placeholder="Search for Country" />
</div> 
        </form>
        <form action="" className='col-sm-12 mt-4 mt-md-0 col-md-4 col-lg-3'>
        <select name='region' id='region' className="form-select select px-3 py-2 rounded-0 border-0" aria-label="Default select example" onChange={updateFilterValue}>
        {          
           regions.map((cur,index)=>{
            return <option key={index}  className="border-0 shadow-none" value={cur}>{cur}</option>
           })
                        
        }  
</select>
        </form>
    </div>
    </div>
  )
}

export default Filters