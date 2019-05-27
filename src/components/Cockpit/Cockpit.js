import React, { useEffect } from 'react';
import cockpitStyle from './Cockpit.module.css';


const Cockpit = (props) => {
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect')
    //     // http request
    //     setTimeout(() => {
    //         alert('Saved Data to Cloud..')
    //     }, 1000)
    // }, [props.persons]);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {

        }, 1000)
    }, [])
    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = cockpitStyle.Red
    }
    if (props.persons.length < 1) {
        classes.push(cockpitStyle.red);
    }
    if (props.persons.length < 2) {
        classes.push(cockpitStyle.bold);
    }
    return (
        <div className={cockpitStyle.Cockpit}>
            <h1 className={classes.join(' ')}>{props.title}</h1>
            <button className={btnClass} onClick={props.clicked}>Tooggle Person</button>
        </div>
    );
}

export default Cockpit;