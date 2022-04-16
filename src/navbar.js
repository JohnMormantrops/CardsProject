import React from "react";

import {
  Link,
} from "react-router-dom";

export default function () {
  let navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  
  return (
    <ol className="nav">
      <Link to="home" className="navButton">
        HOME
      </Link>
      <Link to="openPacks" className="navButton">
        OPEN PACKS
      </Link> 
      <Link to="manageDeck" className="navButton">
        MANAGE DECK
      </Link> 
      <Link to="viewCards" className="navButton">
        VIEW DECK
      </Link>
      <Link to="getCards" className="navButton">
        get cards
      </Link>
      <Link to="account" className="navButton">
        ACCOUNT
      </Link>
    <div className="navButton" onClick={handleClick}>
        Sign out
      </div>
    </ol>
  );
}
