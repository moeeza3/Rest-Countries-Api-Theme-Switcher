import axios from "axios";
import { createContext,useReducer,useEffect,useState,useContext } from "react";
import reducer from "../reducers/countriesreducer";

const AppContext=createContext();
const API="https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,capital,currencies,languages,borders,tld";
const initialState={
    countries:[],
    filtercountries:[],
    singleCountry:{},
    color:"white",
    filters:{
        text:"",
        region:"Filter by Region"
    }
}
const CountriesProvider =({children})=>{
    
    const [state,dispatch]=useReducer(reducer,initialState);

//  const [color,changeColor]=useState("white")
       const updateFilterValue = (event)=>{

         const name=event.target.name;
         const value=event.target.value;
         dispatch({type:"UPDATE_FILTER",payload:{name,value}})
       
       }


    const getCountries=async (url)=>{

        const response=await axios.get(url);
        const countriesdata=response.data;
        dispatch({type:'SET_COUNTRIES',payload: countriesdata});
    }
    const getSingleCountry=async (url)=>{
       
       
            const res=await axios.get(url)
            const singleCountry= await res.data;
            dispatch({ type: "SET_SINGLE_COUNTRY", payload: singleCountry });
        
       }

    const setColor=(color)=>{
        // changeColor("black")
        // let black="black";
        // let white="white";
         dispatch({ type: "SET_COLOR", payload:color});
        // dispatch({ type: "UNSET_COLOR",payloa:white });
    }
   

    useEffect(()=>{
        getCountries(API);
    },[])

    useEffect(()=>{
        dispatch({type:'CHANGE_FILTER'})
    },[state.filters])

    return <AppContext.Provider value={{...state,updateFilterValue,getSingleCountry,setColor}}>
    {children}
    </AppContext.Provider>

}


const useCountryContext=()=>{
    return useContext(AppContext)
}

export {AppContext,CountriesProvider,useCountryContext};