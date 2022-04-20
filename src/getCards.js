import React from "react";
import { useState, useEffect } from "react";
import { apiKey } from "./apiKey";

function Cards() {
  const [allCards, setAllCards] = useState([]);

  useEffect(async () => {
    const headers = {
      // "Access-Control-Allow-Origin": '*',
      "content-type": "application/json",
      jwtToken: apiKey,
    };
    const apiResponse = await fetch("http://localhost:3000/card/", { headers });
    apiResponse.json().then((data) => {
      setAllCards(data);
    });
  }, []);

  console.log("HERES THE CARD DATA FOR ALL CARDS");
  console.log(allCards);

  return (
    <div>
      <p id="getCardsPara">
        <h3>CARDS</h3>
        {allCards.map((card, key) => (
          <div>
            {card.name} {card.nation} {card.paragraph} 
          </div>
        ))}
      </p>
    </div>
  );
}

    // return (<div className="back">CARDS<p>
    //     {allCards.map((card, key) =>(<div>{card.name} {card.nation} {card.paragraph}<br></br><br></br></div> ))}</p></div>);


export default Cards
