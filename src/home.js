import React from "react";
import Logo from "./logo";

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
            All over the world, and throughout history,
            people have always found something to worship.
            Who will you choose? Whose gods are the strongest?
            Get started and choose your gods now.<br/>
          <button className="getCards">GET CARDS</button>
           </p></div>

        <div >{Logo()}</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
