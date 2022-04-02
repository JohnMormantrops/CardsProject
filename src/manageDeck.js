
import React from "react";
import  { useEffect, useState } from "react";
import CardLayout from "./cardLayoutMapped.js";


const handleCardClick = (name) =>{
          console.log("HANDLE CLICK FUNCTION")
          //console.log(e.currentTarget)
          console.log(name)
          
        };


export default function () {

   
    const[deckArray, setDeckArray] = useState([]);
    
    
    
    return (
      <div className="manageDeck back">
        <h1>HERES YOUR CARDS</h1>
          <div className="row">
              <div style={{minWidth:250}}>
              </div>
               <div className="sidePanel">SIDEPANE:</div>
              <div><CardLayout handler={() => setDeckArray()}/></div>
          </div>
      </div>
    );
  }
  