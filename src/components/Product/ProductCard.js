import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import Food from '../Basket/Food';

const ProductCard = ({id,img,price,name}) => {
	useEffect(() => {
        Aos.init({duration:800})
     }, [])
     
	
	
	return (
			<div className="singleFood m-1 ml-auto mr-auto mb-5" data-aos="fade-up">


	  
	 		 <Food id={id} img={img} price={price} name={name}/>		
      

</div>
				
        

	)
}

export default ProductCard;
