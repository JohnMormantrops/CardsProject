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
        {/* <br></br><br></br><br></br><br></br> */}

        <div className="row">


          <div>
          <p className="welcome">
            <h1>World of Worship!!</h1>
            All over the world, and throughout history,<br/>
            people have always found something to worship.<br/>
            Who will you choose? Whose gods are the strongest?<br/>
            Get started and choose your gods now.<br/>
         
          <Link to="openPacks" className="navButton">
            GET STARTED
          </Link>
           </p>
    </div>
   
    {Logo()}</div>
        </div>
      </div>
  );
}
export default Home;
