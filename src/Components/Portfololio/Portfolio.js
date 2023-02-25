import React from "react";
import { Container } from "react-bootstrap";
import PortfolioView from "./PortfolioView";

export default function Portfolio(){
    const testText = "This is a test"
    
    return(
        <PortfolioView
            testText={testText}
        />
    )
}