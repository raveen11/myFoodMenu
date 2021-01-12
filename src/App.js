import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './components/Navigations/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popular from './components/Popular/Popular';
import {BrowserRouter as BrowserRouter, Router,Switch,Route} from 'react-router-dom'
import CartDropdown from './components/UI/Modal/CartDropdown';
import Home from './components/Home/Home'
import Basket from './components/Basket/Basket';
import Layout from './container/Layout/Layout'
import SignIn from './authentication/SignIn'
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
import Checkout from './components/Basket/Checkout';
import Orders from './components/Orders/Orders';
import Popup from './components/Basket/Popup';
import WindowModal from './WindowModal';


function App() {
  const [{},dispatch]=useStateValue();
  const [windowModal,setWindowModal]=useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("This is user",authUser)
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    setWindowModal(true);
    
  },[])

  
  

  return (
    
<BrowserRouter>
    <Switch>
        <Route exact path="/" >
          <Layout/>
          <WindowModal show={windowModal} onHide={()=>setWindowModal(false)} />
        </Route>
        <Route path="/basket">
          <Header/>
          <Basket/>
        </Route>
        <Route path="/login">
          <SignIn/>
        </Route>

        <Route path="/orders">
          <Header/>
          <Orders/>
        </Route>
         
        <Route path="/checkout">
          <Checkout/>
        </Route>
    </Switch>
</BrowserRouter>
  );
}

export default App;

