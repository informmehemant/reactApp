import React from 'react';


import './Person.css'
const person = (props) => {

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Hi I'm a {props.name} and I'm {props.age} year's old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

}

export default person;