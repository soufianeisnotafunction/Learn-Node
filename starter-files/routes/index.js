const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // res.send("Hey! It is working!");
  // res.json(req.query);
  const { name } = req.query;
  res.render("hello", { name });
});

router.get("/reverse/:name", (req, res) => {
  const reversedName = [...req.params.name].reverse().join("");
  res.send(reversedName);
});
module.exports = router;
