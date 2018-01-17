import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button1 from './Button1.jsx';
import Button2 from './Button2.jsx';
import Section2 from './Section2.jsx';

class HomeDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
        this.testMode = this.testMode.bind(this);
        this.designMode = this.designMode.bind(this);
    }
    testMode(){
        //activate test Mode
       this.setState({ value:1 })
    }
    designMode(){
       this.setState({ value:2 })
        //activate design mode
    }
     
    render(){
        let section_1 = <section className="display-section">
            <div className='test-btn'>
                <div className='btn-section'>
                    <h1 className='intro-text'> Welcome Quiz Question Builder</h1>
                    <Button1 onClick = {this.designMode}/>
                    <Button2 onClick = {this.Test}/>
                 </div>
            </div>
            </section> 
        if(this.state.value == 0)
           return section_1;
        else if(this.state.value == 1){
            return section_1;  ;
        } else if(this.state.value == 2){
            return <Section2/>;
        } else{
            return '';
        }
    }
}
export default HomeDisplay;