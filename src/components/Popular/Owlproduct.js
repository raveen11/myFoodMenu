import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import left from '../../images/left.png'
import right from '../../images/right.png'
import data from './owlData.json'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './Owl.css'
import QuickViewModal from './QuickViewModal';

function Owlproduct (){
    
    const [modalShow, setModalShow] = React.useState(false);
    const [newData, setNewData] = React.useState([]);
        const options = {
            margin: 30,
            responsiveClass: true,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            loop:true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                700: {
                    items: 3,
                },
                830:{
                    items:3,
                },
                1000: {
                    items: 4,
                },
                1200:{
                    items:4
                }
            }
        }

        const passData=(alldata)=>{
            setModalShow(true)
            setNewData(alldata)
        }
        

        return (
                <div className="popular_carousel">
                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                    {data.map((item)=>
                                    <div class="item m-2">
                                    <img src={item.img} className="image"/>
                                    <div className="popular_product_body">
                                        <div className="body_name"><h5>{item.name}</h5></div>
                                        <div className="body_detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                        <div className="bottom_div_popular">
                                        <div className="body_price">${item.price}</div>
                                        <div className="popular_btn"><p onClick={() => passData(item)} className="add_popular">Know More&nbsp;></p></div>
                                        </div>
                                    </div>
                                    </div>
                                    )}
                                  </OwlCarousel>
                                  
          <QuickViewModal
            show={modalShow}
            alldata={newData}
            onHide={() => setModalShow(false)}
          />
    
              
                </div>
        );
    }


export default Owlproduct;