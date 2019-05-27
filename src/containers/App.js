import React, { Component } from 'react';
import uuid from 'uuid';

// import appStyles from './App.module.css';

import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

// functional based using hook
class App extends Component {
  // This feature is provided by jsx
  constructor(props) {
    super(props);
    console.log('[App.js] constructors');
    //  This is es5 ways
    this.state = {
      persons: [
        { id: uuid.v4(), name: 'Max', age: 23 },
        { id: uuid.v4(), name: 'Manu', age: 29 },
        { id: uuid.v4(), name: 'Stepheni', age: 30 }
      ],
      otherState: 'some other state',
      showPersons: false,
      showCockpit: true
    }

  }

  //  This is es6 ways

  // state = {
  //   persons: [
  //     { id: uuid.v4(), name: 'Max', age: 23 },
  //     { id: uuid.v4(), name: 'Manu', age: 29 },
  //     { id: uuid.v4(), name: 'Stepheni', age: 30 }
  //   ],
  //   otherState: 'some other state',
  //   showPersons: false
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount ...')
  // }
  componentDidMount() {
    console.log('[App.js] ComponentDidMount ...');
  }
  componentDidUpdate() {
    console.log('[App.js] ComponentDidUpdate ...');
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log('[App.js] shouldComponentUpdate ...');
    return true;
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
    console.log('[App.js] render .....')
    // This is pure js part
    let persons = null;
    // let btnClass = '';
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePerson}
        changed={this.changedName}
      />;
      {/* {
            this.state.persons.map((person, index) => {
              // return <ErrorBoundry key={person.id}>
              return <Person
                key={person.id}

                name={person.name}
                age={person.age}
              />
              // </ErrorBoundry>

            })
          } */}

    }


    // jsx part
    return (
      <div>
        <button onClick={() => this.setState({ showCockpit: false })}>
          remove Cockpit
          </button>

        {
          this.state.showCockpit ? <Cockpit
            title={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.tooglePersonHandler} /> : null
        }
        {persons}
      </div >
    );
  }
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is react app'))
}

export default App;
