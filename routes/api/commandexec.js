const express = require("express");
const router = express.Router();
const child_process = require("child_process");

const exec = require("exec");

router.get("/test", (req, res) => {
  res.json({test: true});
})

router.post("/", (req, res) => {
  let { command } = req.body;
  command = command.toLowerCase();
  // commit if user forgets to
  if (command === 'git push') command = `git commit -m "Commit update at ${Date.now()}" && ` + command
  console.log(command);
  child_process.exec(`${command}`);
  res.json({lol: true})
})


module.exports = router;
