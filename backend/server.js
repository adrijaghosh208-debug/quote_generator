const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const quotes = [
  "Believe in yourself.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Push yourself, because no one else will.",
  "Hard work beats talent.",
  "Great things take time.",
  "Never stop learning.",
  "Your future depends on what you do today."
];

app.get("/api/quotes", (req, res) => {
  const shuffled = [...quotes].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, 100)); // return 100 quotes
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});