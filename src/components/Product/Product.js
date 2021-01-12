import React, { useEffect, useRef, useState } from 'react';
import List from '../../container/ProductListBuilder/List';
import ProductCard from './ProductCard'
import data from './data.json'
import './Product.css'
import Home from '../Home/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';

function searchingFor(search){
    return function(x){
        return x.name.toLowerCase().includes(search.toLowerCase()) || ! search;
    }

}

const allCategories=['All',...new Set(data.map((item)=>item.category))] ;
console.log(allCategories);

 function Product() {
     const searchSection=useRef(null);
     const [menuItems,setMenuItems]=useState(data);
     const [categories,setCategories]=useState([allCategories]);
     const[max,setMax]=useState(120);
     const[min,setMin]=useState(0);
    
     
     const getMin=(event)=>{
        setMin(event.target.value)
    }    
    
    const getMax=(event)=>{
        setMax(event.target.value)
    }    
    const  gotoSearchSec=()=>{
        window.scrollTo({
            top:searchSection.current.offsetTop,
            behavior:'smooth'
        })
    }

     const filterItems=(category)=>{

        if(category==='All'){
            setMenuItems(data);
            return;
        }

         const newItems=data.filter((item)=>item.category===category)
         setMenuItems(newItems)

     }
     
     const searchItem=(search)=>{
        const newSearchedItem=data.filter(searchingFor(search));
        setMenuItems(newSearchedItem)
     }

     const lowest=(low,high)=>{
         
         const priceFilterItems=data.filter((item)=>item.price<=high & item.price>=low)
         setMenuItems(priceFilterItems)
     }

     return (
         <div>
             <div ref={searchSection}>{<Home  categories={categories} searchItem={searchItem} filterItems={filterItems}/>}</div>

             
        <div className="main_product_div">
        <div className="price_div">
                    <h4>Search By Price </h4>
                    <div className="price__div">
                    <TextField
                    label="Minimum"
                    type="number"
                    value={min}
                    onChange={getMin}
                    />
                        <TextField
                    label="Maximum"
                    type="number"
                    value={max}
                    onChange={getMax}
                    />
                         <FilterListIcon  style={{fontSize:'30px'}} onClick={()=>lowest(max,min)}/>   

                    </div>
                    
                </div>


                {/* <div className="form-group">
                        <label htmlFor="price">
                            Food Price ${iprice}
                        </label>
                        <input type="range" name="price" min={min} max={max} id="price" value={iprice} onChange={handleIPrice} />

                    </div> */}

                <div className="container-fluid">
                {
                  !data?(
                    <CircularProgress color="secondary" />
                  ):(
                    <div className="row">
               
                    {menuItems.map(p=>( 
                                <ProductCard 
                                    img={p.img}
                                    id={p.id}
                                    price={p.price}
                                    name={p.name}
                                /> 
                             )
                    )}
                </div>
                )  
                }
              {menuItems.length<6?'':
           <ArrowUpwardIcon className="arrowUp" onClick={gotoSearchSec}  style={{fontSize:'50px'}}/>   
}
                </div>
        
                </div>
            
         </div>
      )
 }
 
export default Product
    
    
    