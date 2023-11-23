const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const PORT = 3000;
const dev = "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb+srv://Temuulen:Temuuka123@cluster0.ikgbq1w.mongodb.net/"
);

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/photos", require("./routes/index"));
  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${30012123}`);
  });
});
