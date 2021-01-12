import React, { Component } from 'react';
import './Logo.css'
import logo from '../../../images/logo.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
class Logo extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon id="logo" icon={faHamburger} />
                <h5 className="logo_text">FoodMenu</h5>
              </div>
        );
    }
}

export default Logo;