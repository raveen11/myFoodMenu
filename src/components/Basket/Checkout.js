import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useStateValue } from '../../StateProvider'
import './Checkout.css'
import {db} from '../../firebase'
import axios from 'axios'



function Checkout() {
  const [{user,basket},dispatch]=useStateValue()
  const history=useHistory()
  const[fname,setFname]=useState('')
  const[lname,setLname]=useState('')
  const[address1,setAddress1]=useState('')
  const[email,setEmail]=useState('')
  const[city,setCity]=useState('')
  const[province,setProvince]=useState('')
  const[zip,setZip]=useState('')
  const[cardNmber,setCardNumber]=useState('')
  const[security,setSecurity]=useState('')
  const[expire,setExpire]=useState('')

  const handleSaveData=()=>{
    // const date=new Date();
    
    // const year=date.getFullYear();
    // const month=date.getMonth();
    // const day=date.getDay();
    // const fulldate=year+"/"+month+"/"+day;
    
    var currentdate = new Date(); 
    var date = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()  
    var time=   currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    const newuser={
      fname:fname,
      lnam:lname,
      email:email,
      address1:address1,
      city:city,
      province:province,
      zip:zip,
      cardNmber:cardNmber,
      security:security,
      expire:expire,
     
    };
    
    const order={
      fulldate:date,
      fulltime:time,
      basket:basket, 
      orderData:newuser
      
  }
  if(basket.length>0){
      
  axios.post('https://my-food-menu-55e8d-default-rtdb.firebaseio.com/orders.json',order)
  .then( response => {
      console.log('success',response)
      
      history.push('/')
  })
  .catch(error =>{
      console.log(error)
  });
  }
  else{
      alert('ADD SOME ITEM TO BASKET')
  }

  dispatch({
      type:'CLEAR_CART',
      basket:[]
  })
   
  }

  return (
    <div>
      <div className="heading_checkout">
        <span className="checkout_email">{user?.email}</span>
      </div>
      <div class="wrapper">
    <div class="container">
      <div className="btns"> 
        <button onClick={()=>history.push('/basket')}>Back to cart</button>
      </div>
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Shipping Details
            </h1>
            <div className="form">
            <div class="name">
                <div>
                    <label for="f-name">First</label>
                    <input type="text" value={fname} onChange={e=>setFname(e.target.value)} required/>
                </div>
                <div>
                    <label for="l-name">Last</label>
                    <input type="text" value={lname} onChange={e=>setLname(e.target.value)}/>
                </div>
            </div>
            <div class="street">
                <label for="name">Email</label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div class="street">
                <label for="name">Address</label>
                <input type="text" value={address1} onChange={e=>setAddress1(e.target.value)}/>
            </div>
           
            <div class="address-info">
                <div>
                    <label for="city">City</label>
                    <input type="text" value={city} onChange={e=>setCity(e.target.value)}/>
                </div>
                <div>
                    <label for="state">State</label>
                    <input type="text" value={province} onChange={e=>setProvince(e.target.value)}/>
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input type="text"value={zip} onChange={e=>setZip(e.target.value)}/>
                </div>
            </div>
            <h1>
                <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
                <label for="card-num">Credit Card No.</label>
                <input name="credit-number"  type="tel" pattern="\d*" maxlength="19" placeholder="Card Number" value={cardNmber} onChange={e=>setCardNumber(e.target.value)}/>
            </div>
            <div class="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="date" value={expire} onChange={e=>setExpire(e.target.value)}/>
                </div>
                <div>
                    <label for="card-num">Security Number</label>
                    <input type="number" value={security} maxlength="4" onChange={e=>setSecurity(e.target.value)}/>
                </div>
            </div>
            
            {!basket?<h4>Add Product to purchase</h4>:
            <div class="btns">
                <button onClick={handleSaveData}>Purchase</button>
             
            </div>
            }
        </div>
    </div>
</div>
      
    </div>
  )
}

export default Checkout
