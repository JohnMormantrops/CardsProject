import { useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
import cardArray from "./data.js";
import InfoBox from "./infoBox";
import React from "react";

export default function () {
  
  //use state here are string values when you click the card
  // the value will be changed to true which will show randomly selected crads
  //or show the info box
  const [showSelected, setShowSelected] = useState("false");
  const [showInfoBox, setShowInfoBox] = useState("false");
  ///this store the currently 
  const [selectedCard, setSelectedCard] = useState([]);

  //args sent from cardlayout mapped 
  const handleCardClick = (e, nation, name) => {
    e.preventDefault()
    console.log("clicked")
    console.log(nation)
    console.log(name)
    var select = cardArray.find( cards => cards.name === name)
    console.log("select theis")
    console.log(select)
    
    setSelectedCard(select);
    setShowInfoBox("true")
    
  }

  return (
    
    <div className="back">
      <div className="row" style={{marginLeft: '15%'}} >
        {showSelected === "false" ? (
          <div
          //creating a div with the className card will display 
          //the card back the card is displayed using css 
          className="card choose"
          //on click show randomly selected cards to add to the users deck
          onClick={() =>
            setShowSelected("true")
          }
        ></div>
        ):(
          
         <CardLayout limit={5} type={'random'} handler={handleCardClick} />     
        )} 
        {/* some jsx here to show the cards if the cards been clicked */}
       
      </div>{/* //end of row div */}

        
      <hr />
      <div style={{margin:"500"}}>
      {showInfoBox === 'true' && <InfoBox card={selectedCard} />}
      </div>
    </div> //end of app div
  );
}
