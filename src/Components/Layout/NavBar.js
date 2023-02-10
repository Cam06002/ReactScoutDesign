import React from "react";
import logo from '../../images/logo.jpg';
import {Button} from 'react-bootstrap';

export default function NavBar(){
    return(
        <div className="nav-header">
            <img src={logo} className="App-logo"/>
            <div>
                <Button>Home</Button>
                <Button>Services</Button>
                <Button>Contact</Button>
                <Button>Portfolio</Button>
                <Button>About US</Button>
                <Button>About You</Button>
            </div>
        </div>
    );
}