import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AthleteAdder from "./components/AthleteAdder/AthleteAdder";
import FinalResults from "./components/FinalResults/FinalResults";
import Header from "./components/Header/Header";
import StartingRoster from "./components/StartingRoster/StartingRoster";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <body>
        <div className="AthleteAdder">
          <AthleteAdder />
        </div>
        <div className="StartingRoster">
          <StartingRoster />
        </div>
        <div className="FinalResults">
          <FinalResults />
        </div>
      </body>
    </div>
  );
}

export default App;
