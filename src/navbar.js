import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function({ authUser, setAuthUser }) {
  let navigate = useNavigate();

  console.log("auth user");
  console.log(authUser);

  const handleClick = () => {
    localStorage.removeItem("token");
    setAuthUser("false");
    navigate("/");
  };

  return (
    <div>
      {authUser === "" ? (
        <ol className="nav">
          <h2 className="heading">
            WORLD OF
            <br />
            WORSHIP!!
          </h2>
          <Link to="/" className="navButton">
            SIGN IN
          </Link>
          <Link to="register" className="navButton">
            SIGN UP
          </Link>
        </ol>
      ) : (
        ///
        /// IF LOGGED IN SHOW THE NAV BAR
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
            GET CARDS
          </Link>
          <div className="navButton" onClick={handleClick}>
            SIGN OUT
          </div>
        </ol>
      )}
    </div>
  );
}
