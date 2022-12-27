import React from "react";
import homeP from "../assets/homeR.png";
function Home() {
  return (
    <React.Fragment>
      <div className="homeFragment">
        <header className="homeHeader">
          <img src={homeP} />
        </header>
        <main className="homeMain">
          <h1>
            Take Care of Your Child's <br /> Health Now
          </h1>
          <h3>
            Take Care of Your Health Now Take Care of Your Child's Health Now
            Take Care{" "}
          </h3>
          <button className="homeButton">APPOINTMENT</button>
        </main>
        <div className="homeBubble"></div>
      </div>
    </React.Fragment>
  );
}

export default Home;
