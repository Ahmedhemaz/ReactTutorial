import React, { Component} from 'react';
import classes from  './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: 'qwdoasflkaf_1',name: 'ahmed', age:26},
      {id: 'sfohasfasf_2' ,name: 'shaf3y', age:27},
      {id: 'asdoqwijdos_3',name: 'ziad', age:28}
    ],
    isPersonsShown: false,
    changeCounter: 0
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdate(nextProps, next){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }


  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    this.setState((prevState, props)=>{
      return {
        persons:persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
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
    console.log('[App.js] render');
    let persons = null;
    if(this.state.isPersonsShown) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    }
    return (
        <div className={classes.App}>
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            isPersonsShown={this.state.isPersonsShown}
            clicked={this.toggelPersonHandler}/>
         {persons}
        </div>
    );
  }
}

export default App;