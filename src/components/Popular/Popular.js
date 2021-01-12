import React, { Component } from 'react';
import Title from '../UI/Title/Title';
import Owlproduct from './Owlproduct';

class Popular extends Component {
    render() {
        return (
            <div>
                <Title className="ml-auto mr-auto">Popular Dishes</Title>
                <Owlproduct/>
            </div>
        );
    }
}

export default Popular;