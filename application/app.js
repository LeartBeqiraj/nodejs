const express = require("express");
const app = express();

function traffic(path) {
  console.log(`I just recieved a request on ${path}`);
}

app.get("/", (req, res) => {
  res.send("hi mom");
  traffic(req.url);
});

app.get("/whoami", (req, res) => {
  res.send("I am Full Stack DevOps Engineer at 21");
  traffic(req.url);
});

app.listen(3000, () => console.log(`Application listening on port 3000`));
