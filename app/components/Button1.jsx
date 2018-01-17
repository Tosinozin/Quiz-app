
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Button1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            hidden:'false'
        }
    }
    render(){
        return(
            <button className='button_1' onClick ={this.props.onClick}>Design Mode</button>
        )
    }
}
export default Button1;

