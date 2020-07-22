import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: 'ahmed', age:26},
      {name: 'shaf3y', age:27},
      {name: 'ziad', age:28}
    ]
  }
  submitBtnHandler = () =>{
    this.setState({
      persons: [
        {name: 'ahmed', age:27},
        {name: 'shaf3y', age:28},
        {name: 'ziad', age:29}
    ]})
  }
  render() {

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={this.submitBtnHandler}>Submit</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
