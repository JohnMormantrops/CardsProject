import React from "react";
import Logo from "./logo";

// function Home() {
//   return <div className="logo">{Logo()}</div>;
// }

// previous code before logo added in casde of errors
function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1 className="heading">
          WORLD OF
          <br />
          WORSHIP!!
        </h1>
      </div>
    </div>
  );
}

export default Home;