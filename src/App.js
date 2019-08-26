import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AthleteAdder from "./components/AthleteAdder/AthleteAdder";
import Header from "./components/Header/Header";
import StartingRoster from "./components/StartingRoster/StartingRoster";

class App extends Component {
  constructor() {
    super();

    this.state = {
      startingRoster: []
    };
    this.submitAthlete = this.submitAthlete.bind(this);
  }

  componentDidMount() {
    axios.get("/api/people").then(response => {
      console.log(response.data);
      this.setState({
        startingRoster: response.data
      });
    });
  }

  submitAthlete(athleteName, athleteImage) {
    const newAthlete = {
      athleteName,
      athleteImage
    };
    console.log(athleteName);

    axios.post("/api/newathlete", newAthlete).then(response => {
      console.log(response.data);
      this.setState({
        startingRoster: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <Header />
        </div>
        <div className="App">
          <div className="left-column">
            <div className="AthleteAdder">
              <AthleteAdder addFn={this.submitAthlete} />
            </div>
            <ul className="StartingRoster">
              <StartingRoster roster={this.state.startingRoster} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
