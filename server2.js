const express = require("express");
const app = express();
const port = 4000;

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};
app.get("/", (req, res) => {
  res.send(users[1].username);
});
