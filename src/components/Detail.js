import React from 'react'
import "../css/Common.css"


const Detail = ({detail}) => {
//  console.log(detail)
//  var lang;

//  console.log(detail.map(cur => {
  
//     //  console.log(Object.values(cur.name.nativeName).map((curname,i,arr)=>{
//     //   if(arr.length - 1==i){
//     //      console.log(curname.common)
//     //   }
//     //  }))
//   //  console.log(Object.values(cur.name.nativeName).map((natName,i,arr)=>{
//   //   if(arr.length-1==i){
//   //     console.log(natName.common)
//   //   }
//   //  })) 

//     // if(!cur.population){
//     //   alert('Please')
//     // }
//     // cur.population?alert("No population"):alert( cur.name.common)

//     // console.log(Object.values(cur.currencies).map(cur=>cur.name))

//   // for(lang in cur.languages){
//   //   console.log(lang.concat(","))
//   // }
// //  let res={};
// //  Object.keys(cur.languages).forEach(key => {
// //   res[cur.languages[key]['rank']] = cur.languages[key]['value']
// //  })
// //  console.log(res)
// // console.log(Object.values(cur.languages).join(","))
// //  console.log(Object.values(cur.languages).map((cur,arr)=>{
// //    console.log(cur.concat(","))
  
// //  }))
  
//  }))
  return (
    <>
       {
        detail.map(cur=>{
          
          return ( 
            <div className="card  detail my-5 shadow-none border-0  ">
        <div className="d-flex justify-content-lg-end justify-content-center flex-wrap">
          <div className="col-lg-5 col-md-8 col-sm-10 col-12 detail-img-container bg-dark">
             <img src={cur.flags.svg} alt={cur.name.common} className='img-fluid detail-img' /> 
          </div>
          <div className="col-lg-7 col-md-8 col-sm-10 col-12 ps-lg-5 pe-lg-0 d-flex justify-content-lg-end justify-content-center">
          <div className="card-body ms-lg-4  px-0">
          <div className="card-title h4 ">{cur.name.common}</div>
          <div className="row">
            <div className="col-md-6 col-12">
             <div className='card-text '>Native Name: <span>{!Object.values(cur.name.nativeName)?"NILL":Object.values(cur.name.nativeName).map((natName,i,arr)=>arr.length-1==i?natName.common:null)}</span></div> 
          <div className='card-text '>Population: <span>{!cur.population? "Nill":cur.population}</span></div>
          <div className='card-text '>Region: <span>{!cur.region?"NILL":cur.region}</span></div>
          <div className='card-text '>Sub Region: <span>{!cur.subregion?"NILL":cur.subregion}</span></div>
          <div className='card-text '>Capital: <span>{!cur.capital?"NILL":cur.capital}</span></div>
            </div>
            <div className="col-md-6 col-12">
              <div className='card-text '>Top Level Domain: <span>{!cur.tld[0] || !cur.tld? "NILL":cur.tld[0]}</span></div> 
          <div className='card-text '>Currencies: <span>{!cur.currencies?"NILL":Object.values(cur.currencies).map(cur=>cur.name)}</span></div>
          <div className='card-text '>Languages: <span>{Object.values(!cur.languages?"NILL":cur.languages).join(",")}</span></div> 
        
            </div>
          </div>
          <div className="border-countries  border-0 d-flex flex-column card-text mt-4">
           Border Countries:
           <div className='d-flex flex-wrap'>
           {!cur.borders ?"NILL":cur.borders.map((cur)=>{
                 return <span className='me-1  px-2 shadow'>{cur}</span>
            })
            }
            </div>
            {/* <div className="card-text h6 ">
            Border Countries: {!cur.borders ?"NILL":cur.borders.map((cur)=>{
                 return <span className='mx-1   px-2 shadow'>{cur}</span>
            })
            }
           </div>  */}
          </div>
          </div>

          
        
          </div>
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
      </div>);
        })
       }
     
    </>
  )
}

export default Detail