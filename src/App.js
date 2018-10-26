import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/
const Button = (props) => {
  return (<button onClick={()=>props.clickFunction(props.incrementValue)}>+{props.incrementValue}</button>)
}

const Result = (props) => {
  return (<div>{props.counter}</div>)
}

class App extends Component {
  constructor(){
    super();
    this.state = {counter:0};
  }
  handleClick=(addValue)=>{
    this.setState((prevStage)=>{
      return {counter : prevStage.counter+addValue}
    })
  }
  render(){
    return (
      <div>
        <Button incrementValue={1} clickFunction={this.handleClick}/>
        <Button incrementValue={5} clickFunction={this.handleClick}/>
        <Button incrementValue={10} clickFunction={this.handleClick}/>
        <Button incrementValue={100} clickFunction={this.handleClick}/>
        <Result counter={this.state.counter}/>
      </div>
    )
  }
}

export default App;
