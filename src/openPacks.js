import { useState, useEffect } from "react";
import CardLayout from "./cardLayoutMapped.js";
import { apiKey } from "./apiKey.js";
import InfoBox from "./infoBox";
import React from "react";

export default function () {
  
  //use state here are string values when you click the card
  // the value will be changed to true which will show randomly selected crads
  //or show the info box
  const [showSelected, setShowSelected] = useState("false");
  const [showInfoBox, setShowInfoBox] = useState("false");
  ///this store the currently 
  const [selectedCard, setSelectedCard] = useState([]);
  const [randomCards, setRandomCards] = useState([]);

  const[cardArray, setCardArray] = useState([]);

    useEffect(() => {

      const headers = {
          // "Access-Control-Allow-Origin": '*',
          "content-type" : "application/json",
          "jwtToken": apiKey
          
      }
      
      const fetchData =  async () => {
        const apiResponse = await fetch("http://localhost:3000/card/", { headers })
        const json = await apiResponse.json();
        setCardArray(json);
      }
      fetchData().catch(console.error)
    }, [])
   
     //this functions should add to users collection
 const addToCollection = async(e) => {
    e.preventDefault();
    const send = {cardArray};
    const header = {
        // "Access-Control-Allow-Origin": '*',
        "content-type" : "application/json",
        "jwtToken": apiKey
        
    }

    fetch("http://localhost:3000/deck", {
      method: "PUT",
      header,
      body: send 
    }).then(()=> {
      console.log("ADDED?")
  })
  
}


  const getRandom = () => {
    let someCards= [];
    for(let i = 0; i < 5; i++){
      let card = cardArray[Math.floor(Math.random() * cardArray.length)]
      console.log("Heres a crd??")
      console.log(card)
     
      setRandomCards(randomCards => [...randomCards, card]);
      console.log(randomCards)
    }
    setShowSelected("true")
  }
  //
  console.log("RANDOM")
  console.log(randomCards)

  const handleCardClick = (e, nation, name) => {
    e.preventDefault()
    console.log("clicked")
    console.log(nation)
    console.log(name)
    var select = cardArray.find( cards => cards.name === name)
    console.log("select theis")
    console.log(select)
    
    setSelectedCard(select);
    setShowInfoBox("true")
    
  }

  return (
    
    <div className="back">
      <div className="row" style={{marginLeft: '15%'}} >
        {showSelected === "false" ? (
          <div
          //creating a div with the className card will display 
          //the card back the card is displayed using css 
          className="card choose"
          //on click show randomly selected cards to add to the users deck
          onClick={() => getRandom()
          }
        ></div>
        ):(
          <div className="cardContainer" id="cardContainer">
          {randomCards.map((card, key) => (
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
          ))}<div className="addToCollection" onClick={addToCollection}>ADD TO COLLECTION</div>
        </div>
        //  <CardLayout limit={5} type={'random'} handler={handleCardClick} />     
        )} 
        {/* some jsx here to show the cards if the cards been clicked */}
       
      </div>{/* //end of row div */}

        
      <hr />
      <div style={{margin:"500"}}>
      {showInfoBox === 'true' && <InfoBox card={selectedCard} />}
      </div>
    </div> //end of app div
  );
}
