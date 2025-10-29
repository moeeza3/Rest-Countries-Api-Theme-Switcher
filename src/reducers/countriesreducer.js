const countriesreducer=(state,action)=>{
    switch (action.type) {
        case "SET_COUNTRIES":
            return{
                ...state,
                countries: [...action.payload],
                filtercountries:[...action.payload],
                filters: {...state.filters},
            }

            case "SET_COUNTRIES":
                return{
                    ...state,
                    singleCountry:action.payload
                }
        case "UPDATE_FILTER":
            const {name,value}=action.payload;
            return{
                ...state,
               filters:{
                ...state.filters,
                [name]:value
               }
            }
        
        case "CHANGE_FILTER":
            let {countries}=state;
            let tempFilter=[...countries];
            const {text,region}=state.filters;
            if(text){
                  
                tempFilter=tempFilter.filter
                 (currElem=>currElem.name.common.toLowerCase().includes(text.toLowerCase()) || currElem.region.toLowerCase().includes(text.toLowerCase()))

            }
            if(region!=="Filter by Region"){
                tempFilter=tempFilter.filter
                (currElem=>currElem.region.toLowerCase()===region.toLowerCase());
            }
            else{
                 tempFilter=tempFilter.map
                 (currElem=>currElem);
               }
              return{
                ...state,
                filtercountries:tempFilter
              }
        case "SET_COLOR":
         /*   const {color}=action.payload;
           const {black}=state */
          
           
            return{
                ...state,
                color:action.payload
            }
    //    case "UNSET_COLOR":
    //     return {
    //         ...state,
    //         color:action.payload
    //     }
        default:
            return state
    }
}

export default countriesreducer;