import React from 'react';
import classes from './Cockpit.module.css';
const cockpit = (props)=> {
    let btnClass = '';
    const assignedClasses = [];
    if(props.isPersonsShown){
        btnClass = classes.Red;
    }
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
            <h1>Hello React</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>TogglePersons</button>
        </div>
    );
}

export default cockpit;