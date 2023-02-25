import React, {useEffect, useState} from "react";

export default function useFetchGet({
    url
}){
    useEffect(async ()=>{
        const response = await fetch(url);
        const myJson = await response.json();
        return (
            myJson
        );
    },[url]);
}