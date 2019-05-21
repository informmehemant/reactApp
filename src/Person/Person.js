import React from 'react';


import personClass from './Person.module.css'
const person = (props) => {

    return (
        <div className={personClass.Person}>
            <p onClick={props.click}>Hi I'm a {props.name} and I'm {props.age} year's old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

}

export default person;