import React, {useState, useEffect} from "react";
//import {apiKey} from "./apiKey";


function Cards(){

    const [allCards, setAllCards] = useState([])

    var cards = [];
    
    useEffect(async() => {

        const headers = {
            // "Access-Control-Allow-Origin": '*',
            "content-type" : "application/json",
            "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5MWYyY2VjNWVlMTNhOTUzYWZmMyIsImVtYWlsIjoiY3MzNTNAZ21haWwuY29tIiwiaWF0IjoxNjQ4NDc4NjM3fQ.Eo3EssaS0elvehvZ2R3Ie5Z__fS2GamxA1bjpZ2B3lI",
            
        }

        const apiResponse = await fetch("http://localhost:3000/card/", { headers })
        console.log("heres the api response");
        //apiResponse = apiResponse.json()
        //console.log(apiResponse.json())

        apiResponse.json().then(data => {
            cards.push(data)
        });

        console.log("HERES THE CARD DATA FOR ALL CARDS")
        //console.log(cards.);
        //setAllCards(JSON.parse(apiResponse))
         //pass empty array only to run on page load 
    }, [])
  

    return <>
    <h1>Results</h1>
    {
        cards.map(item =>(<h1>{item.name}</h1>)
            
        )
}    
    </>



}

export default Cards

// var myHeaders=newHeaders();
// myHeaders.append("accept", "application/json");
// myHeaders.append("jwtToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I5MWYyY2VjNWVlMTNhOTUzYWZmMyIsImVtYWlsIjoiY3MzNTNAZ21haWwuY29tIiwiaWF0IjoxNjQ4NDc4NjM3fQ.Eo3EssaS0elvehvZ2R3Ie5Z__fS2GamxA1bjpZ2B3lI");
 
// var requestOptions= {
//  method: 'GET',
//  headers: myHeaders,
//  redirect: 'follow'
// };
 
// fetch("http://localhost:3000/card/", requestOptions)
//  .then(response=>response.text())
//  .then(result=>console.log(result))
//  .catch(error=>console.log('error', error));