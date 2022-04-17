import { useState } from "react";
//import cardArray from "./data";
import React from "react";




//this function takes the data and maps it onto cards 
//using thsi component will display all cards from the data
export default function ({cardArray, handler}) {
  //console.log("CARD LAYOUT MAPPED");
  
  const [cards] = useState([cardArray]);

  //in the return function i displayed the contents on the card objects
  //on the css background design there is an onclick functiuon added to each crad which 
  // can be used to send card id to database
  return (
    
    <div className="cardContainer" id="cardContainer">
      {cards.map((card, key) => (
        <div className="card" onClick={(e) => handler(e, card.nation, card.name)} id={card.nation}>
          <div className="pic">
            <p className="heroname">{card.name}</p>
            <img src={card.image} alt="hero pic" />
          </div>
          <div className="ability">
            <p className="text">{card.attack}</p>
          </div>
          <div className="ability">
            <p className="text">{card.defense}</p>
          </div>
        </div>
      ))}
    </div>

    
  );
}
