import React from "react";
import CardLayoutMapped from "./cardLayoutMapped";


export default function ({card}) {
  console.log("INFO BOX???")
  console.log(card.name)
  console.log(card)
  console.log("END OF INFO")
  return (
    <div className="infoBox">
      <div className="viewInfo">
        <h1>{card.name} {card.nation} God</h1>
        <p>
          laboris reprehenderit sint laborum cupidatat id reprehenderit
          excepteur in sint do minim elit consequat nulla occaecat deserunt
          aliquip duis ad
        </p>
      </div>
      <CardLayoutMapped limit={1} type={card}/>
    </div>
  );
}
