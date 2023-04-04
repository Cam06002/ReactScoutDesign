import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Admin, Resource, ListGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

export default function PortfolioView({
    dataProvider,
    userList
}){
    return(
        <Admin dataProvider={dataProvider}>
            <Resource name="portfolio" list={userList} />
        </Admin>
    )

}