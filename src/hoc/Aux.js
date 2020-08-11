import React from 'react';
const aux = props=> (
    <div className={props.classes.Person}>
        {props.children}
    </div>
);
export default aux;