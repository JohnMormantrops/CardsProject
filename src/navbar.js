import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

export default function () {
  return (
    <ol className="nav">
      <Link to="home" className="navButton">
        HOME
      </Link>
      <Link to="openPacks" className="navButton">
        OPEN PACKS
      </Link>
      <Link to="viewCards" className="navButton">
        VIEW CARDS
      </Link>
      <Link to="manageDeck" className="navButton">
        MANAGE DECK
      </Link>
      <Link to="getCards" className="navButton">
        get cards
      </Link>
      <Link to="account" className="navButton">
        ACCOUNT
      </Link>
    </ol>
  );
}
