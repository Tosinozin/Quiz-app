import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddButton from './AddMoreBtn.jsx';
import Add from './Add.jsx';

let Input = {
    width: 250,
    padding: 10,
}

let TextArea = {
    name1: 'TextArea1',
    name2: 'TextArea2',
    name3: 'TextArea3',
    name4: 'TextArea4',
    name5: 'TextArea5'
}
let inputName = {
    name1: 'input1',
    name2: 'input2',
    name3: 'input3',
    name4: 'input4',
    name5: 'input5'
}
/** Styles for header */
let DesignMode = {
    marginTop: 30,
    padding: 4,
}
let valueData = {
    placeHolder1:'Type in  your Question',
    placeHolder2: 'Type in an option'
}
/** styles for Button */
let Btn = {
    color: 'white',
    backgroundColor: '#30ccfc'
}
 let textAreaDesign = {
     width: 400,
     height:150,
     border:'1px solid gray'
 }

export default class Section2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            numChildren: 0,
            id:'data'+0,
        }
        this.onOptions = this.onOptions.bind(this);
      }
     
     
      onOptions(e){
          e.preventDefault(e);

          this.setState({numChildren : this.state.numChildren + 1})
          if(this.state.numChildren == 5){
              this.setState({numChildren: 5});
          }
    }
    
    render(){
        return(
            <section className = 'design-mode' style = {DesignMode}>
                <div className='design-intro-text' style = {{ marginBottom:20}}>
                    <h3>Welcome You can set up your questions</h3>
                </div>
                <div className="add-btn-section">
                    <form className = 'AddInput'>
                        <div className="form-text-area">
                            <textarea style = {textAreaDesign} name={TextArea.name1} id="" cols="30" rows="10"  placeholder={valueData.placeHolder1}></textarea>
                        </div>
                        <div className ="input-text-area">
                           <div> 
                               <div className='options'>
                                    <span style ={{padding:10}}>Option (A)</span>
                                    <input type="text" style={Input} name={inputName.name1} placeholder={valueData.placeHolder2}/>
                                    {this.state.numChildren}
                                    <button onClick={this.handleClick} style = {Btn}  >Answer</button>
                                </div>
                            </div>
                            <div>
                                <AddButton onClick ={this.onOptions} onCount={this.state.numChildren} style = {Btn}/>
                            </div>
                        </div>
                    </form>
                    <button onClick={this.onAddChild} className='totalSubmit'> + Add More Question</button>
                    <button onClick={this.onAddChild} className='totalSubmit'>Submit</button>
                </div>
            </section>
        )
    }
}