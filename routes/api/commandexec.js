const express = require("express");
const router = express.Router();
const child_process = require("child_process");

const exec = require("exec");

router.get("/test", (req, res) => {
  res.json({test: true});
})

router.post("/", (req, res) => {
  const { command } = req.body;
  // commit if user forgets to
  if (command === 'git push -u origin master') command = `git commit -m "Commit update at ${Date.now()}" && ` + command
  child_process.exec(`${command}`);
  res.json({lol: true})
})


module.exports = router;
