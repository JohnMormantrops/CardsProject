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
        <div>{Logo()}</div>
      </div>
    </div>
  );
}
export default Home;
