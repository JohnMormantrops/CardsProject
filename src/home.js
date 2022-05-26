import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";

// function Home() {
//   return <div className="logo">{Logo()}</div>;
// }

//previous code before logo added in casde of errors
function Home() {
  return (

    <div className="home">
      <div className="title">
          <div className="row">


          <div>
          <p className="welcome">
            <h1>World of Worship!!</h1>
            All over the world, and throughout history,<br/>
            people have always found something to worship.<br/>
            Who will you choose? Whose gods are the strongest?<br/>
            Get started and choose your gods now.<br/>
            <br/>
         
              <Link to="../openPacks" className="navButton space">
                GET STARTED
              </Link>
           </p>
          </div>
         {/* end paragraph div */}
   
    <div >
     {Logo()}
     <Link to="../openPacks">
        <div className="cardContainer homecard" id="cardContainer">
                  <div className="cardhome right"  id="norse">
                    <div className="pic">
                      <p className="heroname">Baldur<div className="letter">
                        N
                      </div></p>
                      <img src="https://github.com/JohnMormantrops/Images/blob/main/Baldur.jpg?raw=true" alt="hero pic" />
                    </div>
                    <div className="ability">
                      <p className="text">Invincible assault +4 attack</p>
                    </div>
                    <div className="ability">
                      <p className="text">Cleanse evil remove an enemy from the field</p>
                    </div>
                    </div>
             
              </div> 
              {/* //card div end */}
              <div className="cardContainer homecard" id="cardContainer">
                  <div className="cardhome left"  id="Chinese">
                    <div className="pic">
                      <p className="heroname">Big Thief <div className="letter">
                        C
                      </div></p>
                      <img src="https://github.com/JohnMormantrops/Images/blob/main/thief.jpg?raw=true" alt="hero pic" />
                    </div>
                    <div className="ability">
                      <p className="text">Steal draw two from opponents deck</p>
                    </div>
                    <div className="ability">
                      <p className="text">Sneak away +3 defense</p>
                    </div>
                    </div>
              </div>
              {/*  end of card container */}
              </Link>
            </div>
            
          </div>
         
       
        </div>

      </div>
  );
}
export default Home;
