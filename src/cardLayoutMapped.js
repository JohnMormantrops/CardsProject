import { useEffect, useState } from "react";
import cardArray from "./data";
import React from "react";




//this function takes the data and maps it onto cards 
//using thsi component will display all cards from the data
export default function ({limit, type}) {
  //console.log("CARD LAYOUT MAPPED");
  //const [cardArray, setCardArray] = useState([]);

//   console.log("HERES THE CARD ARRAY")
//   console.log(cardArray);
//   console.log(limit);
//   console.log(type);
 
//  // setCardArray(cards);
  
//   console.log( Math.floor(Math.random() * cardArray.length));
  
  let tempCards = [];

  // if(type === 'random'){
  //    console.log("YES RANDOM")
  //     for(let i = 0; i< limit; i++){
  //       console.log(i);
  //       tempCards[i] = cardArray[Math.floor(Math.random() * cardArray.length)];
  //       console.log(tempCards[i]);
  //     }
  //     console.log("HERES THE CARD ARRAY ?????")
  //     console.log(cardArray);
  //     //cardArray =[];
  //     //cardArray = tempCards.map(c=> c.value);
  //     //cardArray =[];
  //     //cardArray = tempCards//
  // }
  


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
