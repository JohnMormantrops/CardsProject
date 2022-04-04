import {  useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
import InfoBox from "./infoBox";
import React from "react";
import cardArray from "./data.js";

export default function () {
  
  const handleCardClick =()=> {
    console.log("CRADS CLICKED")
  }
  //use state here is a string value when you click the 
  const [showFaction, setShowFaction] = useState("");

  return (
    <div className="back">
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "norse"
              ? setShowFaction("")
              : setShowFaction("norse")
          }
        ></div>
        {showFaction === "norse" ? (
          <CardLayout faction={showFaction} handler={handleCardClick} />
        ) : (
          <InfoBox card={cardArray[0]}/>
        )}
      </div>
      {/* //end of row */}
      <hr />
      <div class="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "china"
              ? setShowFaction("")
              : setShowFaction("china")
          }
        ></div>
        {showFaction === "china" ? (
          <CardLayout  faction={showFaction} handler={handleCardClick} />
        ) : (
          <InfoBox card={cardArray[0]} />
        )}
      </div>
      {/* //end of row */}
      <hr />
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "southamerica"
              ? setShowFaction("")
              : setShowFaction("southamerica")
          }
        ></div>
        {showFaction === "southamerica" ? (
          <CardLayout faction={showFaction} handler={handleCardClick}/>
        ) : (
          <InfoBox card={cardArray[0]} />
        )}
      </div>
      {/* //end of row */}
      <hr />
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "greek"
              ? setShowFaction("")
              : setShowFaction("greek")
          }
        ></div>
        {showFaction === "greek" ? (
          <CardLayout faction={showFaction} handler={handleCardClick} />
        ) : (
          <InfoBox card={cardArray[0]}/>
        )}
      </div>

      <hr />
      {/* //end of row */}
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "usa" ? setShowFaction("") : setShowFaction("usa")
          }
        ></div>
        {showFaction === "usa" ? (
          <CardLayout faction={showFaction} handler={handleCardClick}/>
        ) : (
          <InfoBox card={cardArray[0]}/>
        )}
      </div>
      {/* //end of row */}
    </div> //end of app div
  );
}
