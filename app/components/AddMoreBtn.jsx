import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class  AddButton extends Component{
    render(){
        return (<button name = {this.props.onCount} style = {this.props.style} 
        onClick = {this.props.onClick}> + Add More Options </button>
        )
    }
}
export default AddButton;