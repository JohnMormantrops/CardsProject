import "./styles.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Nav from "./navbar.js";
import Home from "./home.js";
import OpenPacks from "./openPacks";
import ViewCards from "./viewCards";
import Account from "./account";
import ManageDeck from "./manageDeck";
import GetCards from "./getCards";



export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
          {/* Route links are in navbar file */}
          <Routes>
            <Route exact path="home" element={<Home />} />
            <Route exact path="openPacks" element={<OpenPacks />} />
            <Route exact path="viewCards" element={<ViewCards />} />
            <Route exact path="account" element={<Account />} />
            <Route exact path="manageDeck" element={<ManageDeck />} />
            <Route exact path="getCards" element={<GetCards />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
