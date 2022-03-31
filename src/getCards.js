import  {useState, useEffect} from "react";
import {apiKey} from "./apiKey";


function Cards(){

    const [allCards, setAllCards] = useState([])    
    
    useEffect(async() => {

        const headers = {
            // "Access-Control-Allow-Origin": '*',
            "content-type" : "application/json",
            "jwtToken": apiKey
            
        }
        const apiResponse = await fetch("http://localhost:3000/card/", { headers })
        apiResponse.json().then(data => {
            setAllCards(data);
        });
    }, [])
    
    console.log("HERES THE CARD DATA FOR ALL CARDS")       
    console.log(allCards)

    return null
}

export default Cards
