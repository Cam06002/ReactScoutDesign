import React from "react";
import { Container } from "react-bootstrap";
import PortfolioView from "./PortfolioView";
import {List, Datagrid, TextField, EmailField} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

export default function Portfolio(){
    const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
     const userList = 
        (<List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.street" />
                <TextField source="phone" />
                <TextField source="website" />
                <TextField source="company.name" />
            </Datagrid>
        </List>);

    return(
        <PortfolioView
            dataProvider={dataProvider}
            userList={userList}
        />
    )
}