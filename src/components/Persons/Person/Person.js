import React from 'react';
import classes from './Person.module.css';
const Person = (props)=>{
    console.log('[Person.js] rendering...');
    return (
            <div className={classes.Person}>
                <p onClick={props.click}>My name is {props.name} and i'm {props.age} years old </p>
                <p>{props.children}</p>
                <input type='text' onChange={props.nameChanged} value={props.name}/>
            </div>
        );
}
export default Person;