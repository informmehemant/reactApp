import React, { Component } from 'react';


import personClass from './Person.module.css';

class Person extends Component {

    // const rnd = Math.random();
    // if (rnd < 0.7) {
    //     throw new Error('Something when wrong')
    // }
    render() {
        console.log('[Person.js] rendering ...');
        return (
            <div className={personClass.Person} >
                <p onClick={this.props.click}>Hi I'm a {this.props.name} and I'm {this.props.age} year's old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }


}

export default Person;