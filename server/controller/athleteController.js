const data = require("../data.json");
let userId = 1;
module.exports = {
  getAthletes: (req, res, next) => {
    console.log("hit");
    res.status(200).send(data);
  },
  getAthleteById: (req, res, next) => {
    const { id } = req.params;
    const index = data.findIndex(athlete => {
      return athlete.id === parseInt(id);
    });
    if (index !== -1) {
      res.status(200).send(data[index]);
    } else {
      res.status(404).send("athlete not found");
    }
  },

  postAthlete: (req, res, next) => {
    const { id, athleteImage, athlete } = req.body;
    const newAthlete = {
      id: userId++,
      athlete,
      athleteImage
    };
    data.push(newAthlete);
    res.status(200).send(data);
  }
};
