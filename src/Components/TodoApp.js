import React from 'react';
import './App.css';
import Drawer from './Drawer.js';
import {Router} from "@material-ui/icons";

export class TodoApp extends React.Component {

    /*constructor(props) {

    }*/

    constructor(props) {
        super(props);

    }

    handleLogging() {
        localStorage.setItem('isLoggedLn', "false")
    }

    render() {

        return (
                <Drawer/>
        );

    }




}
