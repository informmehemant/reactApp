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
        console.log('[Cockpit.js] useEffect1');
        setTimeout(() => {
            console.log('Saved Data to Cloud..');
        }, 1000)
        return () => {
            console.log('[Cockpit.js] Cleanup work in useEffect...');
        }
    }, [])
    useEffect(() => {
        console.log('[Cockpit.js] useEffect2');
        return () => {
            console.log('[Cockpit.js] 2nd Cleanup work in useEffect...');
        }
    });
    useEffect(() => {
        console.log('[Cockpit.js] useEffect3');
        return () => {
            console.log('[Cockpit.js] 3nd Cleanup work in useEffect...');
        }
    }, [props.persons]);
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

            <h1 className={classes.join(' ')} >{props.title}</h1>
            <button className={btnClass} onClick={props.clicked}>Tooggle Person</button>
        </div>
    );
}

export default Cockpit;