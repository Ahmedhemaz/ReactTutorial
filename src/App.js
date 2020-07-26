import React, { Component} from 'react';
import classes from  './App.module.css';
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
    let persons = null;
    let btnClass = '';
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
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
  
    return (
        <div className={classes.App}>
          <h1>Hello React</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button 
          className={btnClass}
          onClick={this.toggelPersonHandler}>TogglePersons</button>
          {persons}
        </div>
    );
  }
}

export default App;