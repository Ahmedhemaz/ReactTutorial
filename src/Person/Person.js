import React from 'react';
const Person = (props)=>{
    return (
            <div>
                <p>My name is {props.name} and i'm {props.age} years old </p>
                <p>{props.children}</p>
            </div>
        );
}
export default Person