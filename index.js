const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const PORT = process.env.PORT || 443;
https
  .createServer(options, app)
  .listen(PORT, console.log(`server runs on port ${PORT}`));
