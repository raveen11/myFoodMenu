import React, { Component } from 'react';
import {Navbar,NavDropdown,NavLink,Nav,Button} from 'react-bootstrap'
import Logo from '../../UI/Logo/Logo'
import {Link} from 'react-router-dom'
class Headnav extends Component {
    render() {
        return (
            <div className="container-fluid">
                
                <Navbar collapseOnSelect  style={{height:'50px'}}>
                    <Navbar.Brand href="#home" style={{color:'wheat'}}>
                        <Link to="/"><Logo/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Nav className="ml-auto">
                        <Nav.Link href="#home" style={{color:'wheat',fontSize:'18px'}}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{color:'wheat',fontSize:'18px'}}>Features</Nav.Link>
                       </Nav>
               
                    </Navbar>
            </div>
        );
    }
}

export default Headnav;