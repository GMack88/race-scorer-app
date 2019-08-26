const express = require("express");
const app = express();
const data = require("./data.json");
const athleteController = require("./controller/athleteController");

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).send(data);
});

// app.get("/api/")

app.post("/api/newathlete", athleteController.postAthlete);

app.put("/api/resultslist/update/:id");

app.delete("/api/startlist/delete/:id", (req, res, next) => {
  res.status(200).send("Starting List is Live");
});

const port = 4000;
app.listen(port, () => console.log(`server listening on ${port}`));
