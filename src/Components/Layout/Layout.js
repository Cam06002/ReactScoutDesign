import React, { Children } from "react";
import NavBar from "./NavBar";
import PageContainer from "./PageContainer";

export default function Layout(){
    return (
        <NavBar>
            <PageContainer>
                {Children}
            </PageContainer>
        </NavBar>
    );
}