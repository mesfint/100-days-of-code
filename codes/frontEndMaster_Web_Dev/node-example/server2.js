const express = require("express");
const path = require("path");

const insults = [
  "Code doesn’t compile",
  "Full of anti patterns",
  "Cargo cult programmer",
  "Hackish",
  "Randomness",
  "You're programming! How cool is that?",
  "Code doesn’t compile",
  "Literally the most pathetic thing I've read, ever",
  "Bunch of drama alert drama queens imo"
];

function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.get("/insult", function(req, res) {
  res
    .json({
      insult: getRandomInsult()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
