import {  useState, useEffect } from "react";
import InfoBox from "./infoBox";
import React from "react";
import { apiKey } from "./apiKey.js";

export default function ({authUser}) {
  
  const handleCardClick =()=> {
    console.log("card clicked")
  }
  //use state here is a string value when you click the 
  const [showFaction, setShowFaction] = useState("");
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {

    const headers = {
        // "Access-Control-Allow-Origin": '*',
        "content-type" : "application/json",
        "jwtToken": authUser
        
    }
    
    const fetchData = async() => {
      const apiResponse = await fetch("http://localhost:3000/card/deck", { headers })
      const json = await apiResponse.json();
      setCardArray(json);
    }
    fetchData().catch(console.error)
    }, [])

  return (
    <div className="back">
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "true"
              ? setShowFaction("")
              : setShowFaction("true")
          }
        ></div>
        {showFaction === "true" ? (
          <div className="cardContainer" id="cardContainer">
          {cardArray.decks && cardArray.decks.map((card, key) => (
            <div className="card" onClick={(e) => handleCardClick(e, card.nation, card.name)} id={card.nation}>
              <div className="pic">
                <p className="heroname">{card.name}<div className="letter">{card.nation.charAt(0).toUpperCase()}</div></p>
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
        ) : (
          <div className="infoBox">
      <div className="viewInfo">
        <h1>MY DECK</h1>
        <p>
        </p>
      </div>
      </div> 
        )}
      </div>
      {/* //end of row */}
    </div> //end of app div
  );
}
