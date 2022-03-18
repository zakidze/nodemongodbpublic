var express = require("express");
var cors = require("cors");
const { json } = require("body-parser");
var app = express();

app.use(cors());

var corsOptions = {
  origin: "*",
};
app.get("/", function (req, res) {
  console.log("recived");
  res.json({ hey: "psst" });
});

app.listen(5000, () => console.log("lisning on port 5000"));
