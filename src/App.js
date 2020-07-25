import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {id: 'qwdoasflkaf_1',name: 'ahmed', age:26},
      {id: 'sfohasfasf_2' ,name: 'shaf3y', age:27},
      {id: 'asdoqwijdos_3',name: 'ziad', age:28}
    ],
    isPersonsShown: true
  }
  submitBtnHandler = (newName) =>{
    this.setState({
      persons: [
        {name: newName, age:27},
        {name: 'shaf3y', age:28},
        {name: 'ziad', age:29}
    ]})
  }
  nameChangedHandler = (event, personId)=>{
    const personIndex = this.state.persons.findIndex(person => person.id === personId );
    const personCopy = {...this.state.persons[personIndex]};
    personCopy.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = personCopy;
    this.setState({persons:persons})
  }

  toggelPersonHandler = ()=>{
    const isPersonHiddenFlag = this.state.isPersonsShown;
    this.setState({isPersonsShown: !isPersonHiddenFlag})
  }

  deletePersonHandler = (personIndex)=>{
    const personsTemp = [...this.state.persons]
    personsTemp.splice(personIndex,1);
    this.setState({persons: personsTemp});
  }
  render() {

    const style = {
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8x',
      cursor: 'pointer',

    }
    let persons = null;
    if(this.state.isPersonsShown) {
      persons = (
        <div>
          {this.state.persons.map((person,i) => {
            return <Person 
            key={person.id}
            name={person.name} 
            age={person.age}
            click ={this.deletePersonHandler.bind(this, i)}
            nameChanged={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      style.backgroundColor = 'red';
    }

    const classess = [];
    if(this.state.persons.length <=2){
      classess.push('red');
    }
    if(this.state.persons.length <=1){
      classess.push('bold');
    }
  
    return (
        <div className="App">
          <h1>Hello React</h1>
          <p className={classess.join(' ')}>This is really working</p>
          <button 
          style={style}
          onClick={this.toggelPersonHandler}>TogglePersons</button>
          {persons}
        </div>
    );
  }
}

export default App;