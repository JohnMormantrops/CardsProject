
import React from "react";
import  { useEffect, useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
import {apiKey} from "./apiKey";

import InfoBox from "./infoBox";
import DeckBox from "./deckBox";




export default function () {

    ///deck array woill display in the create deck panel and can be updated to the DB as a deck
    const[deckArray, setDeckArray] = useState([]);
    ///show info can display the info of the clicked card
    const[showInfo, setShowInfo] = useState("false");
    ////the info box will dis[ply the info of the selected card
    const [selectedCard, setSelectedCard] = useState([]);
    const[cardArray, setCardArray] = useState([]);

    useEffect(() => {

      const headers = {
          // "Access-Control-Allow-Origin": '*',
          "content-type" : "application/json",
          "jwtToken": apiKey
          
      }
      
      const fetchData =  async () => {
        const apiResponse = await fetch("http://localhost:3000/card/", { headers })
        const json = await apiResponse.json();
        setCardArray(json);
      }
      fetchData().catch(console.error)
      }, [])
      
      console.log("MANAGER DECK")
      console.log(cardArray);


    const handleCardClick = (e, nation, name) => {
          e.preventDefault();
          console.log("HANDLE CLICK FUNCTION") 

          var info = {"nation": nation, "name": name} 
          var select = cardArray.find( cards => cards.name === info.name)
          console.log("select theis")
          console.log(select)
          
          setSelectedCard(select)
          console.log(name)
          setShowInfo("false")
          console.log(nation)
          setDeckArray(deckArray => [...deckArray, info])
          showInfoCard()
          
        };
    console.log("HERES THE DECK ARRAY");
    console.log(deckArray);

    const removeFromDeck = () =>{
      console.log()
    }

    const handlePanelClick = (card) =>{
      console.log(cardArray)
      //e.preventDefault()
      var select = cardArray.find( cards => cards.name === card.name)
      console.log("select This")
      console.log(select)

      setSelectedCard(select)
      console.log("clicked panel button")
      setShowInfo("true")
      
    }

    const showInfoCard = () =>{
      setShowInfo("true") 
    }

    const clearArray = () => {
      setDeckArray([]);
      setShowInfo("false");
    }

    return (
      <div className="manageDeck back">
        
        <div className="createDeck"><h2 className="createDeckTitle">Create Deck</h2></div>
          <div className="row">
              <div style={{minWidth:250}}>
              </div>      
               <div className="sidePanel">
                 <div className="panelBackground"></div>
               <div className="panel">
               <h3 className="build">BUILD DECK {deckArray.length}</h3>{deckArray.map((card, key) => 
               <div className="panelBox" onClick={() => handlePanelClick(card)}>{card.nation} God {card.name} <button className="deckX" onClick={removeFromDeck}>X</button>
               </div>
               )}</div>
               <button className="clearButton" onClick={clearArray}>CLEAR</button>
               </div>
               {/*end of side panel */}
                         
              <div>{showInfo==="true" ? <InfoBox card={selectedCard}/>:<DeckBox />} <div className="cardContainer" id="cardContainer">
                  {cardArray.map((card, key) => (
                    <div className="card" onClick={(e) => handleCardClick(e, card.nation, card.name)} id={card.nation}>
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
    </div></div>
          </div>
      </div>
    );
  }
  