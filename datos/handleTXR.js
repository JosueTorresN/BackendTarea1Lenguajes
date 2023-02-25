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

function WriteTXT() {
  fs.writeFile(partidas, "Hello World!", function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

function InitData() {
  OpenTXT();
}

module.exports = { openTXT: OpenTXT, writeTXT: WriteTXT };