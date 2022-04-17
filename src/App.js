import "./styles.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./navbar.js";
import Home from "./home.js";
import OpenPacks from "./openPacks";
import ViewCards from "./viewCards";
import Account from "./account";
import ManageDeck from "./manageDeck";
import GetCards from "./getCards";
import Login from "./login";
import Register from "./register";

const Homepage = () => (
  <div className="App">
    {/* <Nav /> */}
    <Outlet />
  </div>
)

export default function App() {

  const[authUser, setAuthUser] = useState("false")
  const[awtToken, setAwtToken] = useState("")

  
  console.log("App user?")
  console.log(authUser)

  return (
    <Router>
      <div className="App">

        <Nav authUser={authUser} setAuthUser={setAuthUser}/>
       
        <div>
          {/* Route links are in navbar file */}
          <Routes>
            <Route exact path="/" element={<Login authUser={authUser} setAuthUser={setAuthUser}/>} /> 
            <Route exact path="register" element={<Register authUser={authUser} setAuthUser={setAuthUser}/>} />
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
