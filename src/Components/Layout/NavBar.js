import React from "react";
import logo from '../../images/logo.jpg';
import {Button} from 'react-bootstrap';
import { Navigate } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="nav-header">
            <img src={logo} className="App-logo"/>
            <div className="nav-button-div">
                <Button className="nav-button" onClick={<Navigate to="/Home" replace={true} />}>Home</Button>
                <Button className="nav-button">Services</Button>
                <Button className="nav-button">Contact</Button>
                <Button className="nav-button">Portfolio</Button>
                <Button className="nav-button">About US</Button>
                <Button className="nav-button">About You</Button>
            </div>
        </div>
    );
}