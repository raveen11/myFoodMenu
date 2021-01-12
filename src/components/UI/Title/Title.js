import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
    render() {
        return (
            <div className="title_main_div">
                <h2 className="title"> 
                        {this.props.children}
               </h2>
                <div className="title_base_line">
                </div>
            </div>
        );
    }
}

export default Title;