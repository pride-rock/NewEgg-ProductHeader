const sqlite3 = require("sqlite3");
const express = require("express");
const axios = require("axios");
const parser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/../client"));
app.use(parser.json());

// db connect
const db = new sqlite3.Database("./database/productHeader.db", err => {
  if (err) console.log(err);
  else console.log("db connect success");
});

// query DB
app.get("/api/items/:id", (req, res) => {
  // sends client product table
  db.get(
    "SELECT * FROM product WHERE id=(?)",
    [req.params.id],
    (err, response) => {
      if (err) console.log("db get request failed:", err);
      else {
        res.send(response);
      }
    }
  );
});

let port = process.env.PORT || 3010;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
