const express = require("express");
const app = express();
const data = require("./data.json");
//  const athleteController = require('')

app.use(express.json());

app.get("/api/data", (req, res) => {
  res.send(data);
});
const port = 4000;
app.listen(port, () => console.log(`server listening on ${port}`));
