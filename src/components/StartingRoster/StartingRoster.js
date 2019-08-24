import React, { Component } from "react";
import axios from "axios";
import "./StartingRoster.css";

export default class StartingRoster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startingAthletes: []
    };
  }

  componentDidMount() {
    axios.get("/api/people").then(response => {
      console.log(response.data);
      this.setState({
        startingAthletes: response.data
      });
    });
  }

  render() {
    const { startingAthletes } = this.state;
    console.log(startingAthletes);
    const mappedStartingAthletes = startingAthletes.map(athlete => {
      return (
        <div key={athlete.id}>
          <body>
            <div className="athletename">
              {athlete.athleteName}
              <div className="athlete-image">
                <img src={athlete.athleteImage} />
              </div>
            </div>
          </body>
        </div>
      );
    });
    return <div>{mappedStartingAthletes}</div>;
  }
}
