const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));

const partidas = "./datos/partidas.txt";
const fs = require("fs");
function OpenTXT() {
  fs.readFile(partidas, "utf8", function(err, data) {
    if (err) {
      console.log(err);
      return "Error";
    }
    console.log(data);
    return data;
  });
}


// Routing

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/', async (req, res) => {
    fs.readFile(partidas, "utf8", function(err, data) {
        if (err) {
          console.log(err);
          return res.status(400).send(error);
        }
        return res.status(200).send(data);
    });
});

app.post('/api/:p1/:p2/:win', (req, res) => {
    fs.appendFile(partidas, req.params.p1 + "+=+" + req.params.p2 + "+=+" + req.params.win + "\n", function(err) {
        if (err) {
          res.send("Error");
          return console.log(err);
        }
        res.send("The file was saved!");
        console.log("The file was saved!");
    });
});

app.listen(3500, () => {
  console.log('Example app listening on port 3500!');
});