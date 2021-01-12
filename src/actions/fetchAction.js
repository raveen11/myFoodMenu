import {FETCH_PRODUCTS} from '../actionTypes';
import data from './data.json'

export const fetchProducts =()=>(dispatch)=>{
      
    dispatch({
        type:FETCH_PRODUCTS,
        payload:data
    })


}