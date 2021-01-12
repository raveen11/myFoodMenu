import React, { Component } from 'react';
import Headnav from '../Navs/Headnav';
import Navs from '../Navs/Navs';
import Topnav from '../Navs/Topnav';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navs/>
               </div>
        );
    }
}

export default Header;