import React from 'react'
import './Food.css'
import AddIcon from '@material-ui/icons/Add';
import {useStateValue} from '../../StateProvider'
import Button from '@material-ui/core/Button';


function Food({id,img,price,name}) {
    
	const[{basket},dispatch]=useStateValue();


	const addToCart=()=>{
		dispatch({
			type:'ADD_TO_BASKET',
			item:{
				id:id,
				img:img,
				price:price,
				name:name
			}
		})
	}
    return (
        <figure class="pizza">
            <div class="pizza__hero">
                <img src={img} alt="Pizza" class="pizza__img"/>
            </div>
            
            <div class="pizza__content">
                <div class="pizza__title">
                <h1 class="pizza__heading">{name} 👌</h1>
                <div class="pizza__tag pizza__tag--1">#vegetarian</div>
                <div class="pizza__tag pizza__tag--2">#italian</div>
                </div>
                <p class="pizza__description">
                Yummy veggie pizza with tasty olives, crisp peppers, fresh arugula and original italian         tomato sauce.
                </p>
                <div class="pizza__details">
                <p class="pizza__detail"><span class="emoji">🍕</span>850 kcal</p>
                <p class="pizza__detail"><span class="emoji">⏱</span>30 min</p>
                <p class="pizza__detail"><span class="emoji">⭐️</span>4.7 / 5</p>
                </div>
                <div className="display-flex">
                <Button variant="outlined"className="buttons" onClick={addToCart} color="secondary">
                    Add To Kitchen
                </Button>
                
                <span class="pizza__price">${price}</span>
                </div>
     
            </div>
            
</figure>
    )
}

export default Food
