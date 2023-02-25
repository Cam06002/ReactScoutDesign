import React, {useEffect} from "react";
//import useFetchGet from "../CustomHooks/useFetchGet";
import GradeBookView from "./GradeBookView";

export default function Gradebook(){
    // connection to api here
    const APIKey = "AIzaSyDGwyUvQhJZvvj9UinJ25DPfkO8oICHOBo";
    const {Gradebook_API_URL} = process.env;
    const myUrl = `${Gradebook_API_URL}/edfi-321322/datasets/edfi-321322.GradeBook`;

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(myUrl);
            const myJson = await response.json();
            return (
                console.log(myJson)
            );
        }
        fetchData();
    },[]);
    
    return(
        <GradeBookView

        />
    )
}
