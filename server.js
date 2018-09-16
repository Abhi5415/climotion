const express  = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const commandexec = require("./routes/api/commandexec");

app.use("/command", commandexec);

const port = process.env.port || 8888;
app.listen(port, () => `Listening to port ${port}`);
