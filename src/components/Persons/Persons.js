import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component{
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }


  shouldComponentUpdate(nextProps, next){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }



  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person,index) => {
      return <Person 
      key={person.id}
      name={person.name} 
      age={person.age}
      click ={()=>this.props.clicked(index)}
      nameChanged={(event)=>this.props.changed(event, person.id)}/>
    }
  );
  }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }
}
    
export default Persons;