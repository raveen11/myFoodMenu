import React, { useState } from 'react';
import Headnav from './Headnav';
import Topnav from './Topnav';
import './Navs.css'


function Navs() {

    const[navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY>=120){
            setNavbar(true);
        }
        else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackground)


    return (
            <div className={navbar?'head active':'head'}>
                <Topnav/>
            </div>
    )
}

export default Navs
