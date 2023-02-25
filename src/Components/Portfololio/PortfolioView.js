import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PortfolioView({
    testText
}){
    return(
        <Link to="/GradeBook">
            <Card>
                {testText}
            </Card>
        </Link>
    )
}