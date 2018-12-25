import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";

class App extends Component {
  state={
    Persons:[
        { id:1,name:"reza", age:18},
        { id:2,name:"ali", age:18},
        { id:3,name:"ahmad", age:18}],
      showPerson: false
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
    togglePerson = () =>{
      const status=this.state.showPerson;
        this.setState({
            showPerson : !status
        })
    }

    deletePerson = (index) =>{
        const Allperson=this.state.Persons;
        //const Allperson=[...this.state.Persons];
        Allperson.splice(index,1);
        this.setState({
            Persons : Allperson
        })
    }
    nameChangeHandler=(event,index)=>{
      const personIndex=this.state.Persons.findIndex(p=>{
          return p.id===index
      })
        const PersonValue=this.state.Persons[personIndex];
        PersonValue.name=event.target.value;
      const Person=[...this.state.Persons];
      Person[personIndex]=PersonValue;
      this.setState({Person:Person});
    }



    render() {
        const style = {
            backgroundColor: 'green',
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };
      let persons=null;
      const styles=[];
      if(this.state.Persons.length<=2)
          styles.push('red')
        if(this.state.Persons.length<=1)
            styles.push('bold')
      if(this.state.showPerson){
          persons=(
              <div>
                  {this.state.Persons.map((person,index)=>{
                      return <Header
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          oncl={()=>this.deletePerson(index)}
                      onchange={(event)=>this.nameChangeHandler(index)}/>
                  })}
                 {/* <Header name={this.state.Persons[0].name} age={this.state.Persons[0].age} oncl={this.onclickChange} />
                  <Header name={this.state.Persons[1].name} age={this.state.Persons[1].age} oncl={this.onclickChange} />
                  <Header name={this.state.Persons[2].name} age={this.state.Persons[2].age} oncl={this.onclickChange} />*/}
              </div>
          );
          style.backgroundColor='red';
      }
    return (
      <div className="App">
          <p className={styles.join(' ')}>please click button</p>
          {persons}

       {/* <button onClick={this.checkClick.bind(this,'alireza')}>click</button>
        <button onClick={()=>this.checkClick('alireza')}>click</button>*/}
          <button onClick={this.togglePerson} style={style}>نمایش پرسنل</button>

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
