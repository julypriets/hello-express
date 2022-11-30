const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health-check", (req, res) => {
  res.send("App is healthy :)");
});

app.listen(port, () => {});
