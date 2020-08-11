import React, { Component, Fragment } from 'react';
// import Aux from '../../../hoc/Aux';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
class Person extends Component{
    shouldComponentUpdate(nextProps, next){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return null;
      }
    
    render(){
        console.log('[Person.js] rendering...');
        return (
            // <div className={classes.Person}>
            // <Aux classes={classes}>
            <Fragment>
                <p onClick={this.props.click}>My name is {this.props.name} and i'm {this.props.age} years old </p>
                {/* <p>{this.props.children}</p> */}
                <input type='text' onChange={this.props.nameChanged} value={this.props.name}/>
            </Fragment>
            // </Aux>
            // </div>
        );
    }

  componentDidUpdate(){
    console.log('[Person.js] componentDidUpdate');
  }
}
// const Person = (props)=>{
//     console.log('[Person.js] rendering...');
    
// }
export default withClass(Person, classes.Person);