const express = require("express");
const app = express();
require("dotenv").config();
require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let airportRoutes = require("./routes/airportRoutes");

app.use("/api/airports", airportRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 4000;

const Controllers = require("./controllers");

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
  await Controllers.airportsController.storeAirports();
});
