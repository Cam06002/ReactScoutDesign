import React, { Children } from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

export default function Layout({Children}){
    return (
        <NavBar>
            <Container>
                {Children}
            </Container>
        </NavBar>
    );
}