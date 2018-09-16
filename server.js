const express  = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const commandexec = require("./routes/api/commandexec");

app.use("/command", commandexec);

const port = process.env.port || 8888;
app.listen(port, () => `Listening to port ${port}`);
