var express = require("express");
var cors = require("cors");
var app = express();
const path = require("path");
const router = express.Router();
app.use(cors());

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
