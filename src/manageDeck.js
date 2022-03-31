import React from "react";
import CardLayout from "./cardLayoutMapped.js";

const handleCardClick = () =>{
  console.log("HANDLE CLICK FUNCTION")
};


export default function () {

    return (
      <div className="manageDeck back">
        <h1>HERES YOUR CARDS</h1>
          <div className="row">
              <div style={{minWidth:250}}></div>
               <div className="sidePanel">SIDEPANE:</div>
              <div><CardLayout handler={handleCardClick}/></div>
          </div>
      </div>
    );
  }
  