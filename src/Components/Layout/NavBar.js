import React from "react";
import logo from '../../images/logo.jpg';
import {Nav, Navbar} from 'react-bootstrap';
import { Navigate } from "react-router-dom";

export default function NavBar(){
    return(
        <>
            <div className="nav-header">
                <Navbar expand="lg" className="nav-button-div">
                    <Navbar.Brand href="Home">
                        <img
                            src={logo}
                            className="App-logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="Home" className="nav-button">Home</Nav.Link>
                            <Nav.Link href="Portfolio" className="nav-button
                            ">Portfolio</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="div-section-dark">

            </div>
        </>
        
    );
}