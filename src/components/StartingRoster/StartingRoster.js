import React, { Component } from "react";
import axios from "axios";
import "./StartingRoster.css";

export default class StartingRoster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalResult: []
    };
  }

  myadder(athlete) {
    this.setState({
      finalResult: [...this.state.finalResult, athlete]
    });
  }

  render() {
    const { finalResult } = this.state;
    const { roster } = this.props;
    console.log(roster);
    const mappedStartingAthletes = roster.map(athlete => {
      return (
        <div onClick={e => this.myadder(athlete)} key={athlete.id}>
          <div>
            <div className="athletename">
              {athlete.athleteName}
              <div className="athlete-image">
                <img src={athlete.athleteImage} />
              </div>
              <button
                onClick={e => {
                  e.stopPropagation();
                  console.log("hit");
                  this.props.delete(athlete.id);
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      );
    });

    const mappedEndingAthletes = finalResult.map(athlete => {
      return (
        <div onClick={e => this.myadder(athlete)} key={athlete.id}>
          <div>
            <div className="athletename">
              {athlete.athleteName}
              <div className="athlete-image">
                <img src={athlete.athleteImage} />
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="main">
        <div>{mappedStartingAthletes}</div>
        <div>
          <h1>Results</h1>
          <div>{mappedEndingAthletes}</div>
        </div>
      </div>
    );
  }
}
