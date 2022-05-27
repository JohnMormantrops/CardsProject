import {  useState, useEffect } from "react";
import React from "react";
import ViewOne from "./viewOneCard";

export default function ({authUser}) {
  
 
  //use state here is a string value when you click the 
  const [showFaction, setShowFaction] = useState("false");
  const [cardArray, setCardArray] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);


 const handleCardClick =(card)=> {
    console.log("card clicked")
    console.log(card)
    setShowFaction("card")
    setSelectedCard(card)
  }

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
          className="card choose centered"
          onClick={() =>
            showFaction === "deck"
              ? setShowFaction("false")
              : setShowFaction("deck")
          }
        ><div className="WW"><div className="ww">WW</div></div></div>
        {showFaction === "deck" ? (
          <div className="cardContainer" id="cardContainer">
          {cardArray.decks && cardArray.decks.map((card, key) => (
            <div className="card view" onClick={() => handleCardClick(card)} id={card.nation}>
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
        ) 
        : 
        (showFaction === "false" ?
        (
          <div className="infoBox">
      <div className="viewInfo">
        <h1>MY DECK</h1>
        <p>
          Build your deck in the manage deck page
        </p>
      </div>
      </div> 
        )
        :
        (
          <ViewOne card={selectedCard} setShowFaction={setShowFaction} />
        )
        )
      }
      </div>
      {/* //end of row */}
    </div> //end of app div
  );
}
