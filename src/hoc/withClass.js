import React from 'react';
const withClass = (WrapperComponent, className)=>{
    return (props) =>{
        return(
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    )}
}
export default withClass;