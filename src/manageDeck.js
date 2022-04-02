
import React from "react";
import  { useEffect, useState } from "react";
import CardLayout from "./cardLayoutMapped.js";




export default function () {

   
    const[deckArray, setDeckArray] = useState([]);
    
    const handleCardClick = (name) => {
          console.log("HANDLE CLICK FUNCTION")
          
          //console.log(e.target)
          console.log(name)
          
        };

    
    
    return (
      <div className="manageDeck back">
        <h1>HERES YOUR CARDS</h1>
          <div className="row">
              <div style={{minWidth:250}}>
              </div>
               <div className="sidePanel">SIDEPANE:</div>
              <div><CardLayout handler={handleCardClick}/></div>
          </div>
      </div>
    );
  }
  