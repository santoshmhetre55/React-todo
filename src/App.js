import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  constructor() {
    super()
    this.state= {
      data:[]
    }
    this.addToList = this.addToList.bind(this);
  }

   addToList(e, param) {
     e.preventDefault();
    
    this.state.data.push(param);
    
    this.setState({
      data:this.state.data,
    })
    
  }

  checkAvailable(val) {
console.log("check",val)
  
  }
  render() {
    let input;
    return (
      <div className="App">
        <p className="App-intro">
        {this.state.name}
        </p>
    
          <div>add</div>
          <input 
          name='todoinput' 
          type='text' 
          ref={node => { input = node; }}
          onChange={()=>{this.checkAvailable(input.value)}}
          />
          <button onClick={(e) => {
        this.addToList(e, input.value);
        input.value = '';
      }}>Add</button>

      <p>list</p>
        <ul>
          {console.log(this.state.data)}
          {this.state.data.map((item,i)=><li key={i}>{item}</li>)}
        </ul>
      </div>
      
    );
  }
}

export default App;
