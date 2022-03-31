import { useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
//import InfoBox from "./infoBox";
import React from "react";

export default function () {
  
  //use state here is a string value when you click the card
  // the value will be changed to true which will show randomly selected crads
  const [showSelected, setShowSelected] = useState("false");
  console.log("showSelected");
  console.log(showSelected);
  return (
    
    <div className="back">
      <div className="row" style={{marginLeft: '15%'}} >
        {showSelected === "false" ? (
          <div
          //creating a div with the className card will display 
          //the card back the card is displayed using css 
          className="card choose"
          //on click show randomly selected cards to add to the users deck
          onClick={() =>
            setShowSelected("true")
          }
        ></div>
        ):(
          
         <CardLayout limit={5} type={'random'} />     
        )} 
        {/* some jsx here to show the cards if the cards been clicked */}
       
      </div>{/* //end of row div */}

        {/* <InfoBox /> */}
      <hr />
    </div> //end of app div
  );
}
