import React, { Component, useRef, useState } from 'react';
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Product from '../Product/Product';
import Breadcrumb from '../UI/Modal/Breadcumb';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SearchIcon from '@material-ui/icons/Search';

function Home({filterItems,searchItem,lowest}){
    const[search,setSearch]=useState()
        const options = {
            responsiveClass: true,
            loop:true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 3,
                },
                400: {
                    items: 3,
                },
                600: {
                    items: 3,
                },
                700: {
                    items: 4,
                },
                1000: {
                    items: 6,
                }
            }
        }

        const searchSection=useRef(null)
        const number=300;
        const  gotoSearchSec=()=>
            window.scrollTo({
                top:searchSection.current.offsetTop,
                behavior:'smooth'
            })
  
        const handle=(max,min)=>{
            alert(max)
            alert(min)
        }
        return (

            <div>

                
               <div  className="main">
                    
                    <div className="input-group">
                        <input
                         type="text" 
                         className="form-control"
                         value={search}
                         onChange={e=>setSearch(e.target.value)}
                         placeholder="Search this blog"/>
                         <div className="input-group-append">
                        <button className="btn btn-warning btn" type="button" onClick={()=>searchItem(search)}>
                            <i className="fa fa-search"></i>
                        </button>
                        </div>
                    </div>
  
                </div>

                <div className="navs mb-5" ref={searchSection}>
                          
                          <OwlCarousel className="slider-items owl-carousel carousel" {...options}>
                                <div className='itemss' onClick={()=>filterItems('All')} >ALL</div>
                                <div className='itemss' onClick={()=>filterItems('Noodles')} >Noodles</div>
                                <div className='itemss'onClick={()=>filterItems('Beverages')}>Beverages</div>        
                                <div className='itemss'onClick={()=>filterItems('Momo')}>Momo</div>
                                <div className='itemss'onClick={()=>filterItems('Fruits')}>Fruits</div>
                                <div className='itemss'onClick={()=>filterItems('Food')}>Food</div>    
                              </OwlCarousel>
                                 
                           </div>  
                        
                {/* <Breadcrumb style={{marginLeft:'50px'}}/> */}
              
             
            </div>
        );
    }

export default Home;