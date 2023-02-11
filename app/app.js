const express = require("express");
const app = express();

function traffic(path) {
  console.log(`I just recieved a request on ${path}`);
}

app.get("/", (req, res) => {
  res.send(`
  <h1>Hi mom!</h1>
  <a href="/whoami">Who am I?</a>
  `);
  traffic(req.url);
});

app.get("/whoami", (req, res) => {
  res.send(`
  <h1>Leeart mreti ---> Full Stack DevOps Engineer</h1>
  `);
  traffic(req.url);
});

app.listen(3000, () => console.log(`Application listening on port 3000`));
