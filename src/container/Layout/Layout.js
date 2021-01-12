import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import Header from '../../components/Navigations/Header/Header';
import Popular from '../../components/Popular/Popular';
import Product from '../../components/Product/Product';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Popular/>
                <Product/>
            </div>
        );
    }
}

export default Layout;