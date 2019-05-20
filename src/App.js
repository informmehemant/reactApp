import React, { Component } from 'react';
import uuid from 'uuid';

import './App.css';
import Person from './Person/Person';

// functional based using hook
class App extends Component {
  // This feature is provided by jsx
  state = {
    persons: [
      { id: uuid.v4(), name: 'Max', age: 23 },
      { id: uuid.v4(), name: 'Manu', age: 29 },
      { id: uuid.v4(), name: 'Stepheni', age: 30 }
    ],
    otherState: 'some other state',
    showPersons: false
  }


  changedName = (event, id) => {
    //  finding index
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // cloning or duplicating person

    //This is an Obejct spread Operator
    const person = {
      ...this.state.persons[personIndex]
    };
    // or 
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons })
  }
  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  deletePerson = (index) => {
    // Create a new array
    const persons = this.state.persons.slice()
    // const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({ persons: persons })
  }

  render() {
    // This is pure js part
    let persons = null;
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer',
      borderRadius: '4px'
    }
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePerson(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.changedName(event, person.id)} />
            })
          }

        </div>
      );

    }
    const classes = [];
    if (this.state.persons.length < 1) {
      classes.push('red');
    }
    if (this.state.persons.length < 2) {
      classes.push('bold');
    }

    // jsx part
    return (
      <div className="App" >
        <h1 className={classes.join(' ')}>Future React Version is {Math.floor(Math.random() * 30)}</h1>
        <button style={style} onClick={this.tooglePersonHandler}>Tooggle Person</button>
        {persons}
      </div>

    );
  }
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is react app'))
}

export default App;
