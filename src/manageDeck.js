import React from "react";
import { useEffect, useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
import { apiKey } from "./apiKey";

import InfoBox from "./infoBox";
import DeckBox from "./deckBox";

export default function({ authUser }) {
  //deck array will display in the create deck panel and can be updated to the DB as a deck
  const [deckArray, setDeckArray] = useState([]);
  //show info can display the info of the clicked card
  const [showInfo, setShowInfo] = useState("false");
  //the info box will dispay the info of the selected card
  const [selectedCard, setSelectedCard] = useState([]);
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    const headers = {
      // "Access-Control-Allow-Origin": '*',
      "content-type": "application/json",
      jwtToken: authUser,
    };
    const fetchData = async () => {
      const apiResponse = await fetch("http://localhost:3000/card/deck", {
        headers,
      });
      const json = await apiResponse.json();
      setCardArray(json);
    };
    fetchData().catch(console.error);
  }, []);

  console.log("MANAGER DECK");
  console.log(cardArray.owned);

  useEffect(() => {
    if (cardArray.decks) {
      cardArray.decks.forEach((card) =>
        setDeckArray((deckArray) => [...deckArray, card])
      );
    }
  }, [cardArray.decks]);
  console.log("YUP");

  ///WHEN CARD IS CLICKED ADD IT TO THE DECK ARRAY DISPLAY THE
  ///INFO IN THE SIDE PANEL

  const handleCardClick = (e, card) => {
    e.preventDefault();
    if (deckArray.length < 20) {
      ///add to the deck array
      setDeckArray((deckArray) => [...deckArray, card]);
      //show the info bx with the currently selected card
    }
    setSelectedCard(card);
    setShowInfo("false");
    showInfoCard();
  };

  console.log("HERES THE DECK ARRAY");
  console.log(deckArray);

  const removeFromDeck = (card) => {
    console.log("REMOVE THIS");
    console.log(card);
    var tempArray = [...deckArray];
    var index = tempArray.indexOf(card);
    tempArray.splice(index, 1);
    setDeckArray(tempArray);
  };

  const handlePanelClick = (card) => {
    var select = cardArray.owned.find((cards) => cards.name === card.name);
    setSelectedCard(select);
    setShowInfo("true");
  };

  const showInfoCard = () => {
    setShowInfo("true");
  };

  const clearArray = () => {
    setDeckArray([]);
    setShowInfo("false");
  };

  //add the cards from the deck array to your data base
  const confirmDeck = async (e) => {
    e.preventDefault();
    console.log("ADDING?");
    console.log(deckArray);
    const cardInfo = JSON.stringify(deckArray);
    console.log(cardInfo);

    const header = {
      // "Access-Control-Allow-Origin": '*',
      "content-type": "application/json",
      //authuser contains the jwt token
      jwtToken: authUser,
    };
    const requestOptions = {
      method: "PUT",
      headers: header,
      body: cardInfo,
    };

    const response = await fetch(
      "http://localhost:3000/card/deck",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="manageDeck back">
      {showInfo === "true" ? <InfoBox card={selectedCard} /> : <DeckBox />}

      <div className="row">
        <div style={{ minWidth: 250 }}></div>
        <div className="sidePanel">
          <div className="panelBackground"></div>
          <div className="panel">
            <h3 className="build">
              BUILD DECK {deckArray.length} &#160;&#160;&#160;&#160;{" "}
              <button className="deckOK" onClick={confirmDeck}>
                <b>OK</b>
              </button>
            </h3>
            {deckArray.map((card, key) => (
              <div className="panelBox" onClick={() => handlePanelClick(card)}>
                 {card.name}{" - "}{card.nation}
                <button
                  className="deckX"
                  onClick={() => {
                    removeFromDeck(card);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button className="clearButton" onClick={clearArray}>
            CLEAR
          </button>
        </div>
        {/*end of side panel */}
        <div>
          <div className="cardContainer manageSection" id="cardContainer">
            {cardArray.owned &&
              cardArray.owned.map((card, key) => (
                <div
                  className="card"
                  onClick={(e) => handleCardClick(e, card)}
                  id={card.nation}
                >
                  <div className="pic">
                    <p className="heroname">
                      {card.name}
                      <div className="letter">
                        {card.nation.charAt(0).toUpperCase()}
                      </div>
                    </p>
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
        </div>
      </div>
    </div>
  );
}
