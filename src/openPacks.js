import { useState, useEffect } from "react";
import { apiKey } from "./apiKey.js";
import InfoBox from "./infoBox";
import React from "react";

import Logo from "./babyLogo";




export default function ({authUser}) {
  
  //use state here are string values when you click the card
  // the value will be changed to true which will show randomly selected crads
  //or show the info box
  const [showSelected, setShowSelected] = useState("false");
  const [showInfoBox, setShowInfoBox] = useState("false");
  const [turn, setTurn] = useState("false");
  ///this store the currently 
  const [selectedCard, setSelectedCard] = useState([]);
  const [randomCards, setRandomCards] = useState([]);

  const[cardArray, setCardArray] = useState([]);

  console.log("OPEN PACKS")
  console.log(authUser)

    ///THIS CALL GETS ALL CARDS
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
          console.log("ADDING?")
          console.log(JSON.stringify(randomCards))
          const cardInfo = JSON.stringify(randomCards) 
          console.log(cardInfo)

          const header = {
              // "Access-Control-Allow-Origin": '*',
              "content-type" : "application/json",
              //authuser contains the jwt token
              "jwtToken": authUser         
          }
          const requestOptions = {
            method: "PUT",
            headers: header,
            body: cardInfo
          }

          const response = await  fetch("http://localhost:3000/card/owned", requestOptions);
          const data = await response.json();
          console.log(data)
          setShowSelected("false")  
          setRandomCards([])        
      }

 


//get 5 renadom cards
  const getRandom = () => {
    for(let i = 0; i < 5; i++){
      let card = cardArray[Math.floor(Math.random() * cardArray.length)] 
      setRandomCards(randomCards => [...randomCards, card]);
      //console.log(randomCards)
    }
    setTurn("true")
    
    setTimeout (() => {setShowSelected("true")}, 400);
    
  }
  //
  console.log("CARD ARRAY HERE")
  console.log(cardArray)
  //Handle card click 
  const handleCardClick = (e, nation, name) => {
    e.preventDefault()
    var select = cardArray.find( cards => cards.name === name)
    console.log("select theis")
    console.log(select)
    setSelectedCard(select);
    setShowInfoBox("true") 
  }

  return (
    
    <div className="back">
      {/* style={{marginLeft: '15%'}} */}
      
      <div className="row" id={turn === "true" && "turn"} >
        {showSelected === "false" ? (
          <div
          //creating a div with the className card will display 
          //the card back the card is displayed using css 
          className="card choose"
          //on click show randomly selected cards to add to the users deck
          onClick={() => getRandom()
          }
        ><div>{Logo()}</div></div>
        ):(
          <div className="cardContainer">
          {randomCards.map((card, key) => (
            <div className="card open" onClick={(e) => handleCardClick(e, card.nation, card.name)} id={card.nation}>
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
          ))}<div className="addToCollection" onClick={addToCollection}>ADD TO COLLECTION</div>
        </div>
        //  <CardLayout limit={5} type={'random'} handler={handleCardClick} />     
        )} 
        {/* some jsx here to show the cards if the cards been clicked */}
       
      </div>{/* //end of row div */}     
      <hr />
      <div className="centered">
      {showInfoBox === 'true' && <InfoBox card={selectedCard} />}
      </div>
    </div> //end of app div
  );
}
