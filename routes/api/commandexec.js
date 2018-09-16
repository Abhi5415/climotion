const express = require("express");
const router = express.Router();
const child_process = require("child_process");

const exec = require("exec");

router.get("/test", (req, res) => {
  res.json({test: true});
})

router.post("/", (req, res) => {
  const { command } = req.body;
  child_process.exec(`${command}`);
  res.json({lol: true})
})


module.exports = router;
