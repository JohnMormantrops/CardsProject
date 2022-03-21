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
      <Link to="selectCards" className="navButton">
        SELECT CARDS
      </Link>
      <Link to="viewCards" className="navButton">
        VIEW CARDS
      </Link>
      <Link to="account" className="navButton">
        ACCOUNT
      </Link>
    </ol>
  );
}
