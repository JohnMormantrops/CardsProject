
import React from "react";
import  { useEffect, useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
import cardArray from "./data.js";
import InfoBox from "./infoBox";




export default function () {

    ///deck array woill display in the create deck panel and can be updated to the DB as a deck
    const[deckArray, setDeckArray] = useState([]);
    ///show info can display the info of the clicked card
    const[showInfo, setShowInfo] = useState("false");
    ////the info box will dis[ply the info of the selected card
    const [selectedCard, setSelectedCard] = useState([]);
    

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
          console.log("HERES THE DECK ARRAY");
          console.log(deckArray);
        };
      

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
               <div className="panelBox" onClick={() => handlePanelClick(card)}>{card.nation} God {card.name}
               </div>
               )}</div>
               <button className="clearButton" onClick={clearArray}>CLEAR</button>
               </div>
               {/*end of side panel */}
                         
              <div>{showInfo==="true" && <InfoBox card={selectedCard}/>}<CardLayout handler={handleCardClick}/></div>
          </div>
      </div>
    );
  }
  