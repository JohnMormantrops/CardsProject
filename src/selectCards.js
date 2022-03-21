import { useEffect, useState } from "react";
import CardLayout from "./cardLayoutMapped.js";
import InfoBox from "./infoBox";

export default function () {
  const [showFaction, setShowFaction] = useState("");

  return (
    <div className="back">
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "norse"
              ? setShowFaction("")
              : setShowFaction("norse")
          }
        ></div>
        {showFaction === "norse" ? (
          <CardLayout faction={showFaction} />
        ) : (
          <InfoBox />
        )}
      </div>
      {/* //end of row */}
      <hr />
      <div class="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "china"
              ? setShowFaction("")
              : setShowFaction("china")
          }
        ></div>
        {showFaction === "china" ? (
          <CardLayout faction={showFaction} />
        ) : (
          <InfoBox />
        )}
      </div>
      {/* //end of row */}
      <hr />
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "southamerica"
              ? setShowFaction("")
              : setShowFaction("southamerica")
          }
        ></div>
        {showFaction === "southamerica" ? (
          <CardLayout faction={showFaction} />
        ) : (
          <InfoBox />
        )}
      </div>
      {/* //end of row */}
      <hr />
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "greek"
              ? setShowFaction("")
              : setShowFaction("greek")
          }
        ></div>
        {showFaction === "greek" ? (
          <CardLayout faction={showFaction} />
        ) : (
          <InfoBox />
        )}
      </div>

      <hr />
      {/* //end of row */}
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "usa" ? setShowFaction("") : setShowFaction("usa")
          }
        ></div>
        {showFaction === "usa" ? (
          <CardLayout faction={showFaction} />
        ) : (
          <InfoBox />
        )}
      </div>
      {/* //end of row */}
    </div> //end of app div
  );
}
