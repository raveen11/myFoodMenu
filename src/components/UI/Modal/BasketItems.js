import React from 'react'
import { useStateValue } from '../../../StateProvider'
import './BasketItems.css'
import Button from '@material-ui/core/Button';
import FlipMove from 'react-flip-move'

function BasketItems({id,img,price,name}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
      dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id
      })  

    }
    return (
       
       <div class="pizza1">
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
            <Button style={{width:'170px'}} variant="outlined"className="buttons" onClick={removeFromBasket} color="secondary">
                Remove From Cart
            </Button>
            
            <span class="pizza__price" style={{marginLeft:'50px'}}>${price}</span>
            </div>
 
        </div>
        
</div>
    )
}

export default BasketItems


