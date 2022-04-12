import React from "react";
import CardLayoutMapped from "./cardLayoutMapped";


export default function ({card}) {
  // console.log("INFO BOX???")
  // console.log(card.name)
  console.log(card)
  // console.log("END OF INFO")

  const handleCardClick = () =>{
    console.log("INFO BOX CARD CLICKED")
  }

  return (
    
    <div className="infoBox">
      <div className="viewInfo">
        <h1>{card.name} {card.nation} God</h1>
        <p>
         {card.paragraph}
        </p>
      </div>
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
    </div>
  );
}
