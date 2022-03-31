import { useEffect, useState } from "react";
import cardArray from "./data";
import React from "react";




//this function takes the data and maps it onto cards 
//using thsi component will display all cards from the data
export default function ({limit, type, handler}) {
  //console.log("CARD LAYOUT MAPPED");
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
      if(type === 'random'){
        console.log("YES RANDOM")
          var tempcards = []
          for(let i = 0; i< limit; i++){
            console.log(i);
            let card = cardArray[Math.floor(Math.random() * cardArray.length)]
            console.log("HERES A RANODOM CARD")
            console.log(card);
            tempcards.concat(card);
            setCards(cards => [...cards, card]);
            
            console.log(tempcards);
          }
          
          console.log("HERES THE CARD ARRAY ?????")
          console.log(cards);
      }else{
        setCards(cards.concat(cardArray))
        console.log("NOT RANDOM")
        console.log(cards)
  }}, [])//end of use effect

  console.log("GONNA DISPLAY THIS ARRAY")
  console.log(cards)

  //in the return function i displayed the contents on the card objects
  //on the css background design there is an onclick functiuon added to each crad which 
  // can be used to send card id to database
  return (
    
    <div className="cardContainer" id="cardContainer">
      {cards.map((card, key) => (
        <div className="card" onClick={handler} id={card.nation}>
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
