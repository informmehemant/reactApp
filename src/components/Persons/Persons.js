import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate...');
    //     if (nextProps.persons !== this.props.persons
    //         || nextProps.clicked !== this.props.clicked
    //         || nextProps.changed !== this.props.changed) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js]  getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate... ');
        console.log(snapshot);
    }
    componentDidMount() {
        console.log('[Persons.js] componentDidMount...');
    }
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount...');
    }
    render() {
        console.log('[Persons.js] rendering ...')
        return this.props.persons.map((person, index) => {
            // return <ErrorBoundry key={person.id}>
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} />
            // </ErrorBoundry>

        });
    }

}

export default Persons;