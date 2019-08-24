import React, { Component } from "react";
import axios from "axios";
import "./AthleteAdder.css";

export default class AthleteAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      athleteImage: "",
      title: "Participant Starting List"
    };
  }
  onClick() {
    alert("Athlete Added");
  }
  onChange(event) {
    console.log(event.target.value);
  }
  athleteInput(property, value) {
    this.setState({
      [property]: value
    });
  }
  submitAthlete() {
    const { athleteName, athleteImage } = this.state;

    const newAthlete = {
      athleteName,
      athleteImage
      // StartingRoster.push(newAthlete)
    };

    axios.post("/api/newathlete", newAthlete).then(response => {
      console.log(response.data);
      this.setState({
        startingAthletes: response.data
      });
    });
  }

  render() {
    const { atheleteImage } = this.state;
    return (
      <div className="AthleteAdder">
        <h2>{this.state.title}</h2>
        <button onClick={this.onClick}>Add</button>

        <form
          onSubmit={e => {
            e.preventDefault();
            this.submitAthlete();
          }}
        >
          <input
            placeholder="Athlete Name"
            onChange={e => this.athleteInput("name", e.target.value)}
          />
          <input
            placeholder="Athlete Image"
            onChange={e => this.athleteInput("athleteImage", e.target.value)}
            value={atheleteImage}
          />
        </form>
      </div>
    );
  }
}
