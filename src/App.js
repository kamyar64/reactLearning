import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";

class App extends Component {
  state={
    Persons:[{ name:"reza", age:18},{ name:"ali", age:18},{ name:"ahmad", age:18}]
  }
  checkClick=(name)=>{
   this.setState({
     Persons:[{ name:name, age:10},{ name:"ali", age:18},{ name:"ahmad", age:18}]
   })
  }


  onclickChange = (event) =>{
    this.setState({
      Persons:[{ name:event.target.value, age:10},{ name:"ali", age:18},{ name:"ahmad", age:18}]
    })
  }


  render() {
    return (
      <div className="App">
        <Header name={this.state.Persons[0].name} age={this.state.Persons[0].age} oncl={this.onclickChange} />
        <h1>TEST</h1>
        <button onClick={this.checkClick.bind(this,'alireza')}>click</button>
        <button onClick={()=>this.checkClick('alireza')}>click</button>

        {/*<header className="App-header">
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
        </header>*/}
      </div>
    );
  }
}



export default App;
