import React, { Component } from 'react';
import { Row, Col, Button, FormControl, Form } from 'react-bootstrap';

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
     console.log('param',param);
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
      <div>
      <Row >
        <Col md={4}>
          <h2>
            To Do
          </h2>
        </Col>
        <Col md={8}/> 
      </Row>
      <Row >
      <Form onSubmit={this.addToList}>
        <Col md={2}>
        <FormControl
            type="text"
            placeholder="Enter text"
            ref={node => { 
              console.log(node);
              input = node; }}
            onChange={(e)=>{
              this.checkAvailable(e.target.value)}}
          />
          </Col>
          <Col md={1}>
          <Button 
          type='submit'
          bsStyle="primary"
        //   onClick={(e) => { 
        //    // console.log(e);
        //   this.addToList(e, input.value);
        //   input.value = '';}
        // }
        >Add
        </Button>
        </Col>
        </Form>
      </Row>
        <div>
          <ul>
          {this.state.data.map((item,i)=><li key={i}>{item}</li>)}
        </ul>
        </div>
      </div>     
    );
  }
}

export default App;
