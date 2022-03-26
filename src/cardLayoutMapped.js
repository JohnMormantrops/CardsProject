import { useEffect, useState } from "react";
import cardArray from "./data";

export default function () {
  console.log("CARD LAYOUT MAPPED");
  console.log(cardArray);

  return (
    <div className="cardContainer" id="cardContainer">
      {cardArray.map((card, key) => (
        <div className="card" id={card.nation}>
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
    </div>
  );
}
