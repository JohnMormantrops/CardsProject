import React from "react";
import { useState, useEffect } from "react";

export default function viewone({card, setShowFaction}){

    const [show, setShow] = useState("card")


    console.log(card);
    // const handleCardClick=()=>{
    //     console.log("ONE CARD CLICK")
    //     show === "card" ? setShow("para") : setShow("card")
    // }



return (


   
   <div className="back centered">
   

      { show === "card" ? (
        
      <div className="cardOne" onClick={() => setShow("para")} id={card.nation}>
          <div className="pic">
            <p className="heroname">{card.name}<div className="letter">{card.nation.charAt(0).toUpperCase()}</div></p>
            <img src={card.image} alt="hero pic" />
          </div>
          <div className="ability">
            <p className="text">{card.attack}</p>
          </div>
          <div className="ability">
            <p className="text">{card.defense}</p>
          </div>
    </div>
     ):(
    <div className="onePara shadow" onClick={() => setShow("card")}>
    <h1>{card.name}-{card.nation} </h1>
        <p>
         {card.paragraph}
        </p>
        <div className="backOne" onClick={() => setShowFaction("deck")}>
              BACK
        </div>
     </div>
     )}



    </div>
  );
}