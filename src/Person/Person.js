import React from 'react';
import './Person.css';
import Raduim from 'radium';
const Person = (props)=>{
    const style = {
        '@media (max-width: 500px':{
            width: '400px'
        }
    }
    return (
            <div className='Person' style={style}>
                <p onClick={props.click}>My name is {props.name} and i'm {props.age} years old </p>
                <p>{props.children}</p>
                <input type='text' onChange={props.nameChanged} value={props.name}/>
            </div>
        );
}
export default Raduim(Person);