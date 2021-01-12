import React, { Component, useState } from 'react';
import {Navbar,Nav,NavDropdown,DropdownButton,Dropdown,} from 'react-bootstrap'
import './Navs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faUser,faWallet,faHatchef } from '@fortawesome/free-solid-svg-icons'
import cooking from '../../../images/cooking.png'
import CartDropdown from '../../UI/Modal/CartDropdown'
import Drop from '../../UI/Modal/Drop'
import {Link, useHistory} from 'react-router-dom'
import {useStateValue} from '../../../StateProvider'
import {auth} from '../../../firebase'
import Logo from '../../UI/Logo/Logo'
import SignOutDilogu from '../../../authentication/SignOutDalogu'

function Topnav(){
    const [{basket,user},dispatch]=useStateValue();
    const [state,setState]=useState(false);
    const history=useHistory()
    const handleAuth=()=>{
        setState(true)
    }

    const signOutUser=()=>{
        if(auth){
            auth.signOut();
            setState(false)
            history.push('/')
        }
      }
    

      
        return (
            <Navbar className="navbar" variant="dark">
                    
                    <div style={{color:'wheat;'}}>
                        <Link to="/"><Logo/></Link>
                    </div>
                    
                    
                    <div id="emails">Hello {user? user.email:'Guest'}
                    </div>
                    <SignOutDilogu
                        show={state}
                        signOut={signOutUser}
                        onHide={()=>setState(false)}
                    />
                    
                    <div id="my_accounts">
                        <Link to={!user && "/login"}>
                        <div onClick={handleAuth}>
                        <p className="second">{user?'Sign Out':'Sign In'}</p>
                     
                        </div>
                       </Link>   
                    </div>
                        <div className="orders"><Link to="/orders">My Orders</Link></div>
                        <div style={{marginRight:'10px'}}  className="ml-auto">
                        <Link to="/basket">
                        <img className="cooking_icon" src={cooking} /><span className="count_circle"><h5 className="count_no">{basket.length}</h5></span>
                       
                        </Link>
                        </div>   
                    
                    
                     
            </Navbar>
        );
    }


export default Topnav;    