import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import BasketItems from '../UI/Modal/BasketItems'
import formatCurrency from '../../util'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../../reducer'
import Food from './Food'
import './Basket.css'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move'
import Button from '@material-ui/core/Button';


function Basket() {
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory()

    const clearCart=()=>{
      dispatch({
        type:'CLEAR_CART',
        basket:[]
      })
    }

    return (
        <div className="checkout row">
      <div className="col-md-9">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">{basket.length?'Your shopping Basket':'Your shopping Basket Is Empty'}</h2>
          <Button onClick={clearCart} variant="outlined" disabled={basket.length<1}>Clear Cart</Button>
          {basket.map(item => (
             
          <FlipMove duration={300} easing="ease-in-out">      
            <BasketItems
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
          
        </FlipMove>
          ))}

        </div>
      </div>

      <div className="col-md-3">
        <Subtotal />
      </div>
    </div>
    )
}

export default Basket
