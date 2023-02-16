import React from "react";
import { Button } from "react-bootstrap";

export default function Home(){

    return(
        <>
            <div className="div-section-25">
                <Button className="home-top-button">I Need a Website</Button>
                <Button className="home-top-button">I'm Price Checking</Button>
                <Button className="home-top-button">Just Looking</Button>
            </div>
            <div className="div-section-25">
                <h5>Small Business Specialists</h5>
            </div>
            <div className="div-section-25">
                <h5>Design from Experience</h5>
            </div>
            <div className="div-section-25">
                <h5>A Personal Approach</h5>
            </div>
            <div className="div-section-25">
                <h5>Security and Speed</h5>
            </div>
            <div className="div-section-25">
                <h5>Built for Everyone</h5>
            </div>
            <div className="div-section-25">
                <h5>Let's Chat</h5>
            </div>
        </>
    );
}