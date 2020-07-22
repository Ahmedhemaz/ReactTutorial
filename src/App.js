import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>{
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'ahmed', age:26},
      {name: 'shaf3y', age:27},
      {name: 'ziad', age:28}
    ]
  });
  const submitBtnHandler = () =>{
    setPersonsState({
      persons: [
        {name: 'ahmed', age:27},
        {name: 'shaf3y', age:28},
        {name: 'ziad', age:29}
    ]})
  }
    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={submitBtnHandler}>Submit</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
      </div>
    );
}
export default App;
