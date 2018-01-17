import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Button2 extends Component{
    render(){
        return(
            <button className='button_2'  onClick ={this.props.onClick}>Test Mode</button>
        )
    }
}
export default Button2;